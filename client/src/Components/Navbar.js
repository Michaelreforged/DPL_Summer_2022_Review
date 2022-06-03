import { Link, Outlet } from "react-router-dom"

const Navbar =()=>{
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/game'>Game</Link>
      <Link to='/states'>States</Link>
      <Outlet/>
    </div>
  )
}

export default Navbar