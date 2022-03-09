
//import { useDispatch } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useSignOut } from "../awscognito";
import {Auth} from "aws-amplify"
function Navigator()
{
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // function logout()
    // {
    //     signOut();

    // }
    return(
  
    <ul className="navBar--navigator">
         <li >
            <Link className="navigator--text" to="/main">Home</Link>
        </li>
        <li >
            <Link className="navigator--text" to="/viewdrafts">View Drafts</Link>
        </li>
        <li >
            <Link className="navigator--text" to="/create">Create Blog</Link>
        </li>
        <li >
            <Link className="navigator--button" onClick={useSignOut} to="/">logout</Link>
        </li>
        {/* button to check current user
        <button onClick={()=>{
            const user =Auth.currentAuthenticatedUser();
            user.then(user => user.username)
           .then((name)=>console.log(name))
        }}>logout</button> */}
  </ul>

    )
}
export default (Navigator);