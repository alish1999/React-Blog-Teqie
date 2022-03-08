
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {Authenticator, withAuthenticator} from "@aws-amplify/ui-react"

function Navigator()
{
    const dispatch = useDispatch();
    return(
        // <Authenticator>
        // {({signOut,user}) => (    
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
            <Link className="navigator--text" onClick={() => dispatch({type:"LOGOUT"})} to="/">logout</Link>
        </li>
  </ul>
//   )}
//   </Authenticator>
    )
}
export default (Navigator);