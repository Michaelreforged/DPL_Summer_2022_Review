import { useState } from "react"


const Validation = ()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validation, setValidation] = useState(false)

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  )

  const validPassword = new RegExp(
    '^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$'
  )
  
  const validate = () =>{
    if(!validEmail.test(email)){
      console.log("emial fial")
      setValidation("Issue with Email")
    }
    if(!validPassword.test(password)){

      if(!validEmail.test(email)){
        console.log('first if')
        setValidation("Issue with Email and Password")
      }else{
        setValidation("Issue With Password")
      }
    }
    if(validEmail.test(email) && validPassword.test(password)){
      setValidation(false)
    }
  }

  return(
    <div>
      <h1>Validation</h1>
        <input
          value={email}
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
          />
        <input
          value={password}
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button onClick={validate}>Validate</button>
          {validation && <h1>{validation}</h1>}
    </div>
  )

}

export default Validation