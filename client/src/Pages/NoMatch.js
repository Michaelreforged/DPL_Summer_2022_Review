import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = ()=>{
  const loc = useLocation();

  console.log(loc)

  return(
    <div>
      <h1>No Match for {loc.pathname}</h1>
    </div>
  )

}

export default NoMatch