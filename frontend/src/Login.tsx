import * as React from "react"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


export default function Login()
{
    const myState = useSelector((state : any) => state.changeTheUser);
    const isLogged =useSelector((state : any)=> state.logStatus)
    const dispatch =useDispatch();
    return(
        <div>
        <NavBar />
        <div className="login">
        
        <input  type="text" placeholder={myState} onChange={(e) => dispatch({type:"SETUSER",payload:e.target.value})} />
        
        <button onClick={() => dispatch({type:"LOG"})}  >set LOGIN </button>
        <button onClick={() => dispatch({type:"LOGOUT"})}  >set LOGOUT</button>
        <Link  to="/main">Login</Link>
        
        
        <p>User-name state: {myState}</p>
        <p>Login state:{isLogged }</p>
        </div>
        </div>
    )
}