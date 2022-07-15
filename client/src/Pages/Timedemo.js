import { useContext } from "react"
import { QuoteContext } from "../Providers/QuoteProvier"
import {DateTime, Duration} from "luxon"

const Timedemo = () =>{

  const {quotes} = useContext(QuoteContext)
  const qoute = quotes.slice(0,5)

  console.log(qoute)

  const format = (time) =>{
    return DateTime.fromISO(time).toFormat('yyyy LLL dd')
  }

  const diff = (time) =>{
    let d = DateTime.fromISO(time).diffNow("minutes")
    return d.minutes * -1
  }
  const fancyDiff = (time) =>{
    let d = DateTime.fromISO(time).diffNow("minutes")
    let min = {minutes: d.minutes * -1}
    let duration = Duration.fromObject(min)
    let dur = duration.shiftTo("days","hours","minutes").toFormat("dd 'days' hh 'hours and ' mm 'minutes ago'")
    return dur
  }

  const render = ()=>{
    return qoute.map((q)=>(
      <div key={q.id}>
        <h1>{q.phrase}</h1>
        <p>{q.updated_at}</p>
        <p>{format(q.updated_at)} Updated at</p>
        <p>{diff(q.updated_at)} Minutes Ago</p>
        <p>{fancyDiff(q.updated_at)}</p>
      </div>
    ))
  }

  return(
    <div>
      <h1>Time Demo</h1>
      {render()}
    </div>
  )

}

export default Timedemo