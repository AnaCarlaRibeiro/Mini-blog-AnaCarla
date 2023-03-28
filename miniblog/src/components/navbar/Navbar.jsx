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
          <NavLink to="/login" className={({isActive})=>(isActive? "active": "")}>
            Entrar
          </NavLink>

        </li>
        <li>
          <NavLink to="/register" className={({isActive})=>(isActive? "active": "")}>
            Registrar
          </NavLink>

        </li>
        <li>
          <NavLink to="/about" className={({isActive})=>(isActive? "active": "")} >
            About
          </NavLink>
          
        </li>
      </ul>
    </NavBar>
  )
}
