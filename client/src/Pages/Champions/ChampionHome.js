import axios from "axios"
import { useEffect, useState } from "react"



const ChampionHome =()=>{
  
  const [champs, setChamps] = useState([])
  
  useEffect(()=>{
    getChamp()
  },[])

  const getChamp = async()=>{
    let res = await axios.get('api/allChamp')
    setChamps(res.data)
  }

  const renderChamps = () => {
    return champs.map(({name,id})=>{
      return (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Champion Home</h1>
    {renderChamps()}
    </div>
  )
}

export default ChampionHome