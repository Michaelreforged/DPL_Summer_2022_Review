import { useEffect, useState } from "react"
import Card from "../Components/Card"

const States =()=>{

  const [pokemon, setPokemon] = useState([])
  const [id, setId] = useState('')
  const [oldId, setOldId] = useState('hi')
  const [formId, setFormId] = useState('')

  useEffect(()=>{
    if(oldId == id ){
      return
    }
    getData(id?id:undefined)
  },[id])

  const getData = (id = (Math.floor(Math.random()*800))) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res)=>{
      return res.json()})
    .then((data) => {
      setOldId(id)
      setPokemon([...pokemon, data.name])
      setId(data.id)
    })
  }

  const next = () =>{
    setId(parseInt(id)+1)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setId(formId)
  }

  const renderPokemon = () =>{
    return pokemon.map((p)=>(
      <Card key={p} name={p}/>
    ))
  }

  return(
    <div>
      <h1>States Page</h1>
      {renderPokemon()}
      <button onClick={()=>{next()}}>Next</button>
      <form onSubmit={handleSubmit}>
      <input
      value={formId}
      placeholder={id}
      onChange={(e)=>{setFormId(e.target.value)}}
      />
      <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default States