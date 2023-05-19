import "./navbar.css"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
      <span className="logo">TRAVO HOTEL BOOKING</span>
      <div className="navItems">
      <Link to="/pay" >
        <button className="navButton">Register</button></Link>
        <button className="navButton">Login</button>
      </div>
    </div>
  </div>
  )
}

export default Navbar