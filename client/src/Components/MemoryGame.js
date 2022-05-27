import { useState } from 'react'
import '../StyleSheets/MemGame.css'

const MemoryGame = () =>{

  const [random, setRandom] = useState([])
  const [player, setPlayer] = useState([])

  const colors =  ["green","blue","red","yellow"]

  const gen = () =>{
    random.push(colors[Math.floor(Math.random()*4)])
    setRandom([...random])
  }

  const playerCopy = (color) =>{
    player.push(color)
    if(random.length == 0){
      console.log(`Game hasn't started yet`)
    }
    if(player.length > random.length){
      console.log('too many buttons')
    }
    if(player.length < random.length){

    }
    if(player.length == random.length){
      
    }


  }

  const renderSquares = () =>{
    return colors.map((color)=>{
      return(
        <div className={color} key={color} onClick={()=>{playerCopy(color)}}></div>
      )
    })
  }
 
  return(

    <div>
      <h1>Memory Game</h1>
      <div className="grid">
      {renderSquares()}
      </div>
      <button onClick={()=>{gen()}}>Start</button>
    </div>
  )

}

export default MemoryGame