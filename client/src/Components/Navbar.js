import { Link, Outlet } from "react-router-dom"

const Navbar =()=>{
  return(
    <div style={{margin:'0px 50px 0px 50px'}}>
      <Link to='/'>Home</Link>
      <Link to='/game'>Game</Link>
      <Link to='/states'>States</Link>
      <Link to='/quotes'>Quotes</Link>
      <Outlet/>
    </div>
  )
}

export default Navbar