

import { Link } from "react-router-dom"
import { useSignOut } from "../awscognito";
function Navigator()
{

    return(
  
    <ul className="navBar--navigator">
         <li >
            <Link className="navigator--text" to="/main">Home</Link>
        </li>
        <li >
            <Link className="navigator--text" to="/viewdrafts">Your Blogs</Link>
        </li>
        <li >
            <Link className="navigator--text" to="/create">Create Blog</Link>
        </li>
        <li >
            <Link className="navigator--button" onClick={useSignOut} to="/">Logout</Link>
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