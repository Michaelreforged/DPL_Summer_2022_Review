import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LocationHome =()=>{
  const [locations, setLocations] = useState([])
  const nav = useNavigate()
  
  useEffect(()=>{
    getLocations()
  },[])

  const getLocations = async()=>{
    let res = await axios.get('api/locations')
    setLocations(res.data)
  }

  const renderLocations = () => {
    return locations.map(({name,id})=>{
      return (
        <div key={id}>
          <h1>{name}</h1>
          <button onClick={()=>{nav(`/locations/${id}/champions`)}}>Champions</button>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Location Home</h1>
      {renderLocations()}
    </div> 
  )
}

export default LocationHome