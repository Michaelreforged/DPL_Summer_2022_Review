import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const LocationForm = () =>{
  const loc = useLocation()
  const [name, setName] = useState(loc.state != null ? loc.state.name : null)
  const [err, setErr] = useState('')
  const {id} = useParams()
  const nav = useNavigate()
  const getData = async () =>{
    try {
      const res = await axios.get(`/api/locations/${id}`)
      setName(res.data.name)
    } catch (error) {
      if(error.response.status == 404){
        setErr({message:`No Id matching ${id}`})
        return
      }
      setErr(error)
    }
  }

  useEffect(()=>{
    if(loc.state == null){
      console.log('getData')
    getData()
  }
  },[])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      await axios.put(`/api/locations/${id}`,{name})
      nav('/locations')
    } catch (error) {
      alert('error')
    }
  }

  return(
    <div>
      <h1>Location Form</h1>
      {err.message ? <p>{err.message}</p> : <p>Please enter new name</p>}
      <form onSubmit={handleSubmit}>
        <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </form>
    </div>
  )
}

export default LocationForm