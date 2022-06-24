import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const ChampionForm =()=>{
  const loc = useLocation()
  const {id} = useParams()
  const [champName, setChampName] = useState(id && loc.state ? loc.state.name : "" )
  const [locId, setLocId] = useState(loc.state ? loc.state.locationId : "")

  const nav = useNavigate()

  useEffect(()=>{
    getChamp()
  },[])

  const getChamp = async () =>{
    if(id && loc.state == null){
      let res = await axios.get('/api/allChamp')
      setChampName(res.data.filter(champ =>{
        return champ.id == id
      })[0].name) 
    }
  }
  console.log(loc)
  console.log(locId)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await axios.put(`/api/locations/${locId}/champions/${loc.state.champId}`,{name:champName})
      nav(`/locations/${locId}/champions`)
    } catch (error) {
      alert('error')
    }
  }

  return(
    <div>
      <h1>Edit Champions</h1>
      <form onSubmit={handleSubmit}>
      <input
        value={champName}
        onChange={(e)=>setChampName(e.target.value)}
        />
      </form>
    </div> 
  )
}

export default ChampionForm