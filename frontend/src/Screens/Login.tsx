import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import {signOut} from "../awscognito"
import { useEffect }from "react"
import { Auth } from "aws-amplify"
function Login()
{
    const myState = useSelector((state : any) => state.changeTheUser);
    const isLogged =useSelector((state : any)=> state.logStatus)
    const dispatch =useDispatch();
    useEffect(()=>{ //setting user
         const user =Auth.currentAuthenticatedUser();
         user.then(user => user.username).then((name)=>dispatch({type:"SETUSER",payload:name}))
    },[])
    
    return(
        <div>
        <NavBar />
        <div className="login">
        
        {/* <input  type="text" placeholder={myState} onChange={(e) => dispatch({type:"SETUSER",payload:e.target.value})} /> */}
        
        
        <button onClick={() => dispatch({type:"LOG"})}  >set LOGIN </button>
        <button onClick={() => dispatch({type:"LOGOUT"})}  >set LOGOUT</button>
        <button onClick={signOut}  >AWS logout</button> 

        
        

        
        <Link  to="/main">ACCESS BLOGS</Link>
        
        
        <p>{`you are logged in as: ${myState} `}</p>
        <p>Login state:{isLogged }</p>
        </div>
        </div>
    )
}

export default Login