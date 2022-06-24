import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const LocationChampions =()=>{
  const [champs, setChamps] = useState([])
  const nav = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    getLocations()
  },[])

  const getLocations = async()=>{
    let res = await axios.get(`/api/locations/${id}/champions`)
    setChamps(res.data)
    console.log(res.data)
  }

  const deleteChamp = async (champId) =>{
    setChamps(champs.filter((champ)=>{
      return champ.id != champId
    }))
    await axios.delete(`/api/locations/${id}/champions/${champId}`)
  }

  const renderChampions = () => {
    return champs.map(({name,id:champId,skills})=>{
      return (
        <div key={champId}>
          <h1>{name}</h1>
          <button onClick={()=>{nav(`/champions/${champId}/form`,{state:{name, skills,champId,locationId:id}})}}>Edit Champ</button>
          <button onClick={()=>{deleteChamp(champId)}}>Delete</button>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Location Champions</h1>
      {renderChampions()}
    </div> 
  )
}

export default LocationChampions