import "../App.css"
import MemoryGame from "../Components/MemoryGame"
const Game = () =>{
  return(
    <div className="app">
      {MemoryGame()}
    </div>
  )
}

export default Game