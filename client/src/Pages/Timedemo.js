import react, { useContext } from "react"
import {QuoteContext} from "../Providers/QuoteProvier"
import {DateTime, Duration} from 'luxon'

const TimeDemo = () =>{

  const {quotes} = useContext(QuoteContext)
  const qoute = quotes.slice(0,5)

  const format = (time) =>{
    return DateTime.fromISO(time).toFormat('ffff'); 
  }

  const diff = (time) =>{
    let d = DateTime.fromISO(time).diffNow("minutes")
    console.log(d)
    return d.minutes * -1
  }

  const fancyDiff = (time) =>{

    let d = DateTime.now()
      .diff(DateTime.fromISO(time),'minutes')
      .shiftTo("days","hours","minutes")
      .toFormat("dd 'days' hh 'hours and ' mm 'minutes ago'")
    return d
  }


  const render = () =>{
    return qoute.map((q)=>(
      <div key={q.id}>
        <h1>{q.phrase}</h1>
        <p>What Rails Gives Us: <br/> {q.updated_at}</p>
        <p>Formatting With Luxon: <br/> {format(q.updated_at)}</p>
        <p>Difference: <br/> {diff(q.updated_at)} Minutes Ago</p>
        <p>Fancy Difference: <br/> {fancyDiff(q.updated_at)}</p>
      </div>
    ))
  }

  return(
    <div>
      <h1>Time </h1>
      {render()}
    </div>
  )

}

export default TimeDemo