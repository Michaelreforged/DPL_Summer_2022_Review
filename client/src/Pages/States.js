import React, { useEffect, useState } from "react";

const States = () => {
  const [pokemon, setPokemon] = useState([]);
  const [formID, setFormID] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    getData(id ? id :undefined);
  }, [id]);

  const getData = (id = (Math.floor(Math.random()*802))) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPokemon([...pokemon, data.name])
        setId(data.id)
        setFormID(data.id)
      });
  };

  const next = () => {
    setId(id+1)
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setId(formID)
  }

  return (
    <div>
      <h1> States page</h1>
      {JSON.stringify(pokemon)}
      <br/>
      <button
        onClick={() => {
          next();
        }}
      >
        Next
      </button>
      <form onSubmit={handleSubmit}>
        <input value={formID}
        placeholder={id}
        onChange={(e)=>{setFormID(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default States;
