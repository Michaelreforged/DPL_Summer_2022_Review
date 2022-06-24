import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const LocationChampions =()=>{
  const loc = useLocation()
  const [champs, setChamps] = useState([])
  const [name, setName] = useState(loc.state? loc.state.name:null)
  const nav = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    getLocations()
  },[])

  const getLocations = async()=>{
    let res = await axios.get(`/api/locations/${id}/champions`)
    setChamps(res.data)
    if( name == null ){
      let res = await axios.get(`/api/locations/${id}`)
      setName(res.data.name)
    }
  }

  const renderChampions = () => {
    return champs.map(({name,id:champId,skills})=>{
      return (
        <div key={champId}>
          <h1>{name}</h1>
          <button onClick={()=>{nav(`/champions/${id}/form`,{state:{name,locationId:id,skills,champId}})}}>Edit Champ</button>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>{name}'s Champions</h1>
      {renderChampions()}
    </div> 
  )
}

export default LocationChampions