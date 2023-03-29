import {NavLink} from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useAuthentication } from "../../hooks/hookAuthentication"
import { NavBar } from "./style"



export const Navbar = () => {
  const {user}= useAuthValue()
  const {logout}= useAuthentication()

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
        {!user && (
          <>
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
          </>
        )}

        {user && (
            <>
            <li>
       <NavLink to="/posts/create" className={({isActive})=>(isActive? "active": "")}>
         Novo Post
       </NavLink>

     </li>
     <li>
       <NavLink to="/dashboard" className={({isActive})=>(isActive? "active": "")}>
         Dashboard
       </NavLink>

     </li>
       </>
        )}

        <li>
          <NavLink to="/about" className={({isActive})=>(isActive? "active": "")} >
            About
          </NavLink>
          
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </NavBar>
  )
}
