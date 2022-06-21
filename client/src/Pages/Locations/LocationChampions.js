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

  const renderChampions = () => {
    return champs.map(({name,id})=>{
      return (
        <div key={id}>
          <h1>{name}</h1>
          <button onClick={()=>{nav(`/champions/${id}/form`)}}>Edit Champ</button>
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