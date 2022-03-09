
import {useNavigate,} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { useEffect }from "react"
import { Auth } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
function Login()
{
    const myState = useSelector((state : any) => state.changeTheUser);
    const isLogged =useSelector((state : any)=> state.logStatus)
    const navigate = useNavigate();
    const dispatch =useDispatch();
    useEffect(()=>{
    
        try{ //setting user
          const user =Auth.currentAuthenticatedUser();
          user.then(user => user.username)
         .then((name)=>dispatch({type:"SETUSER",payload:name}))
         .then(()=>{
             if(isLogged==0)
             {dispatch({type:"LOG"})}
             else
             {throw console.error();
             
             }
            })
         .then(()=>{

            if(isLogged==0)
            { navigate("/main",{replace:true})}

            }
            )
    
    
        }
        catch(error)
        {
            console.log("err1")
        }
        },[])
    

    return(
        
       
        
            <div className="center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>


     {/* <NavBar />
        <div classNameName="login">
        
        
        <button onClick={() => dispatch({type:"LOG"})}  >set LOGIN </button>
        <button onClick={() => dispatch({type:"LOGOUT"})}  >set LOGOUT</button>
        <button onClick={useSignOut}  >AWS logout</button> 

        
        

        
        <Link  to="/main">ACCESS BLOGS</Link>
        
        
        <p>{`you are logged in as: ${myState} `}</p>
        <p>Login state:{isLogged }</p>
        </div> */}
    </div>
    )
}

export default withAuthenticator(Login)