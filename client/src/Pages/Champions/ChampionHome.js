import axios from "axios";
import { useEffect, useState } from "react";

const ChampionHome = () => {
  const [champs, setChamps] = useState([]);
  const [norm, setNorm] = useState([])

  useEffect(() => {
    getChamp();
  }, []);

  const getChamp = async () => {
    let res = await axios.get("api/allChamp");
    let res2 = await axios.get("api/locations");
    setChamps(res.data);
    setNorm(normChamp(res.data, res2.data));
  };

  const normChamp = (data, locData) => {
    const ids = data.map((c) => c.location_id);
    const uniqueId = [...new Set(ids)];
    return uniqueId.map((location) => {
      let champs = data.filter((c) => c.location_id === location);
      let name = locData.filter((l) => l.id == location)[0].name;
      return {name,champs}
    });
  };

  const renderChamps = () => {
    return champs.map(({ name, id }) => {
      return (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      );
    });
  };

  const renderNormChamps = () =>{
    return norm.map((n)=>(
      <div>
        <h1>{n.name}</h1>
        {n.champs.map((c)=>(
          <div>
            <h3>{c.name}</h3>
          </div>
        ))}
      </div>
    ))
  }

  return (
    <div>
      <h1>Champion Home</h1>
      {renderNormChamps()}
    </div>
  );
};

export default ChampionHome;
