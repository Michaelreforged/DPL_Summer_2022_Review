import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const ChampionForm =()=>{
  const loc = useLocation()
  const {id} = useParams()
  const [champName, setChampName] = useState(id && loc.state ? loc.state.name : "" )
  const [locId, setLocId] = useState(loc.state ? loc.state.locationId : '')
  const [skills, setSkills] = useState(loc.state ? loc.state.skills : '')
  const nav = useNavigate()

  console.log(loc)

  useEffect(()=>{
    getChamp()
  },[])

  const getChamp = async () =>{

    if(id && loc.state == null){
      let res = await axios.get('/api/allChamp')
      setChampName(res.data.filter(champ =>{
        return champ.id == id
      })[0].name) 
      console.log(res)
      setLocId(res.data.filter(champ =>{
        return champ.id == id
      })[0].location_id
      )
      setSkills(res.data.filter(champ =>{
        return champ.id == id
      })[0].skills
      )
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await axios.put(`/api/locations/${locId}/champions/${id}`,{name:champName,skills})
      nav(`/locations/${locId}/champions`)
    }catch(err){
      console.log(err)
    }
  }

  return(
    <div>
      <h1>Edit Champions</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
        value={champName}
        onChange={(e)=>setChampName(e.target.value)}
        />
        <p>Skills</p>
        <input
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div> 
  )
}

export default ChampionForm