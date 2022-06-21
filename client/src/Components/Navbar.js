import { Link, Outlet } from "react-router-dom"

const Navbar =()=>{
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/game'>Game</Link>
      <Link to='/states'>States</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/champions'>Champions</Link>
      <Outlet/>
    </div>
  )
}

export default Navbar