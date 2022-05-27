import { useState } from "react";
import "../StlyedSheets/Memory.css";

const MemoryGame = () => {
  const [random, setRandom] = useState([]);
  const [player, setPlayer] = useState([]);
  const [show, setShow] = useState("");

  const colorLoop = (i) =>{
    setShow(random[i])
    console.log(i,show)
    setTimeout(() => {
      i++
      if(i <= random.length){
        colorLoop(i)
      }
      if(i == random.length){
        setShow("")
      }
    }, 250);

  }

  const colors = ["red", "green", "blue", "yellow"];
  // used to generate the array that the player needs to copy
  const gen = () => {
    random.push(colors[Math.floor(Math.random() * 4)]);
    console.log(random);
    let i = 0;
    colorLoop(i)
    setRandom([...random]);
  };

  // Function to check player choices
  const playerChoice = (color) => {
    if (random.length == 0) {
      console.log("Game Hasn't started");
      return;
    }
    player.push(color);
    if (player.length > random.length) {
      console.log("An issues has occured");
    }
    if (player.length <= random.length) {
      for (let i = 0; i < player.length; i++) {
        console.log("forloop");
        if (player[i] != random[i]) {
          console.log("Player Array", player);
          return alert("Game ended");
        }
      }
      if (player.length == random.length) {
        gen();
        setPlayer([]);
        return;
      }
    }

    setPlayer([...player]);
  };

  const renderBox = () => {
    return colors.map((color) => {
      return (
        <div
          className={show == color ? `${color}no` : color}
          key={color}
          onClick={() => {
            playerChoice(color);
          }}
        />
      );
    });
  };

  return (
    <div>
      <h1>Simon Says</h1>
      <div className="grid">{renderBox()}</div>
      <button
        onClick={() => {
          gen();
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default MemoryGame;
