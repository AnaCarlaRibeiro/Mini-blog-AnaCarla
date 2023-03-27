import {NavLink} from "react-router-dom"
import { NavBar } from "./style"

export const Navbar = () => {
  return (
    <NavBar>
      <NavLink to="/" className="brand">
        Mini <span>Blog</span>

      </NavLink>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=>(isActive? "active": "")}>
            Home
          </NavLink>

        </li>
        <li>
          <NavLink to="/About" className={({isActive})=>(isActive? "active": "")} >
            About
          </NavLink>
          
        </li>
      </ul>
    </NavBar>
  )
}
