import axios from "axios"
import { useContext, useState } from "react"
import { QuoteContext } from "../../Providers/QuoteProvier"

const QuoteForm = ({quote}) =>{
  const [show, setShow] = useState(false)
  const [phrase, setPhrase]= useState(quote?quote.phrase:"")
  const {addQuote, updateQuote} = useContext(QuoteContext)
  const [valid, setValid] = useState(false)

  const newQuoteCheck = typeof quote !== "object"

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(newQuoteCheck){
      try {
        let res = await axios.post('/api/quotes',{phrase})
        addQuote(res.data)
      } catch (error) {
        let errors = error.response.data.errors.join('\n')
        setValid(errors)
      }
    }else{
      let res = await axios.put(`/api/quotes/${quote.id}`,{phrase})
      updateQuote(res.data)
    }
  }

  const renderForm = () =>{
    return(
      <form onSubmit={handleSubmit}>
        <p>{newQuoteCheck? "New Quote" : "Update Quotes" }</p>
        <input
        value={phrase}
        onChange={(e)=>{setPhrase(e.target.value)}}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }

  return(
    <div>
      <h1>{newQuoteCheck && "Add Quote"}</h1>
      <button onClick={()=> setShow(!show)}>
        {show? "Hide Form":"Show Form"}
      </button>
      {show && renderForm()}
      {valid && <p style={{whiteSpace:'pre-wrap'}}>{valid}</p>}
    </div>
  )
}

export default QuoteForm