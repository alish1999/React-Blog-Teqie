import NavBar from "../Components/NavBar"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

function Login()
{
    const myState = useSelector((state : any) => state.changeTheUser);
    const isLogged =useSelector((state : any)=> state.logStatus)
    const dispatch =useDispatch();
    return(
        // <Authenticator>
        // {({signOut,user}) => (
        <div>
        <NavBar />
        <div className="login">
        
        <input  type="text" placeholder={myState} onChange={(e) => dispatch({type:"SETUSER",payload:e.target.value})} />
        
        <button onClick={() => dispatch({type:"LOG"})}  >set LOGIN </button>
        <button onClick={() => dispatch({type:"LOGOUT"})}  >set LOGOUT</button>
        {/* <button onClick={signOut}  >awslogout</button> */}
        {/* <button onClick={() =>console.log(user.attributes)}  >asd</button> */}

        
        

        
        <Link  to="/main">Login</Link>
        
        
        <p>User-name state: {myState}</p>
        <p>Login state:{isLogged }</p>
        </div>
        </div>
        // )}
        // </Authenticator>
    )
}

export default withAuthenticator(Login)