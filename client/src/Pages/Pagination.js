import { useEffect, useState } from "react"
import axios from 'axios'
import './../StlyedSheets/Quote.css'


const Pagination = () =>{
  const [quotes, setQuotes] = useState([])
  const [per, setPer] = useState(30)
  const [count, setCount] = useState(1)

  const getQuotes = async () =>{
    try{
      let res = await axios.get('api/pagequotes')
      console.log(res.data)
      setQuotes(res.data.quote)
      setPer(res.data.per)
      setCount(res.data.count)

    }catch(err){
      console.log(err)
    }
  }

  const render = ()=>{
    return quotes.map((q)=>(
      <div className="card">
        <h1>{q.phrase}</h1>
      </div>
    ))
  }

  const newQuotes = async (page) =>{
    try {
      let res = await axios.get(`/api/pagequotes?page=${page}`)
      setQuotes(res.data.quote)
    } catch (err) {
      
    }
  }

  const renderButtons = () =>{
    const numPage = Math.ceil(count/per)
    const buttonArr = []
    for(let i = 1; i<= numPage; i++){
      buttonArr.push(<button onClick={()=>{newQuotes(i)}}>{i}</button>)
    }
    return buttonArr
  }

  useEffect(()=>{
    getQuotes()
  },[])
  
  return(
    <div>
      <h1>Pagination</h1>
      {renderButtons()}
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {render()}
      </div>
    </div>
  )

}

export default Pagination