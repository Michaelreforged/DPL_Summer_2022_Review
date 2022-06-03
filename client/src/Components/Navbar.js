import { Link, Outlet } from "react-router-dom"

const Navbar = () =>{
  return(
    <>
    <h1>NavBar Stuff</h1>
    <Link to='/'> Home</Link>
    <Link to='/game'> Simon Says</Link>
    <Link to='/jslakdfjas'> No Match </Link>
    <Outlet/>
    </>
  )
}

export default Navbar