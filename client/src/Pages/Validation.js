import { useEffect, useState } from "react"

const Validation = ()=>{
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validation, setValidation] = useState(false)

  const validEmail = new RegExp(
    '^[a-zA-z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]'
  )
  const vaildPwd = new RegExp(
    '^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$'
  )

  const validate = () =>{
    if(!validEmail.test(email)){
      setValidation("Issue with Email")
    }
    if(!vaildPwd.test(password)){
      if(validation){
        setValidation(validation+'and Password')
      }else{
        setValidation("Issues with Password")
      }
    }
    if(validEmail.test(email)&& vaildPwd.test(password)){
      setValidation("Everything is valid")
    }
  }

  return(
    <div>
      <h1>Validation</h1>
        <input
        type="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={validate}>Check</button>
      {validation && <h1>{validation}</h1>}
    </div>
  )

}

export default Validation