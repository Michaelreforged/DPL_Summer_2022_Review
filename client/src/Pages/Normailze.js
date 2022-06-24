import axios from 'axios'
import {useState} from 'react'

const Normalize = () =>{

  const [data, setData] = useState([])
  const [nData, setNData] = useState([])
  const [showData, setShowData] = useState(false)
  const [showNData, setNShowData] = useState(false)


  const getData = async () =>{
    let res = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json')
    setData(res.data.data)
    setNData(normData(res.data.data))
  }

  const normData = (data) =>{
    const champions = Object.entries(data)
    return(
      champions.filter((champ)=>{
        return champ[0].length > 11
      }).map(champ=>{
        return{
          name: champ[0],
          title: champ[1].title,
          desc: champ[1].blurb,
          class: champ[1].tags
        }
      })
    )

  }

  return(
    <div>
      <h1> Normalize</h1>
      <button onClick={()=>{getData()}}>Grab Datas</button>
      <button onClick={()=>{setShowData(!showData)}}> Show Regular</button>
      <button onClick={()=>{setNShowData(!showNData)}}> Show Normalized Data</button>
      <br/>
      {showData && JSON.stringify(data)}
      {showNData && JSON.stringify(nData,null, 2)}
    </div>
  )

}

export default Normalize