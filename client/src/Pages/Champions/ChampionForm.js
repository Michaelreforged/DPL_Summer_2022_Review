import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ChampionForm =({name, location_id,skills})=>{
  const {id} = useParams()
  const [champName, setChampName] = useState(id && name ? name : "" )
  const nav = useNavigate()

  useEffect(()=>{
    getChamp()
    console.log(champName)
  },[])

  const getChamp = async () =>{
    if(id && location_id == undefined){
      let res = await axios.get('/api/allChamp')
      setChampName(res.data.filter(champ =>{
        return champ.id == id
      })[0].name) 
    }
  }

  const handleSubmit = (e)=>{

  }

  return(
    <div>
      <h1>Edit Champions</h1>
      <form onSubmit={handleSubmit}>
      
      </form>
    </div> 
  )
}

export default ChampionForm