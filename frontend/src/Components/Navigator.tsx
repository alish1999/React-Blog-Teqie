import * as React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export default function Navigator()
{
    const dispatch = useDispatch();
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
            <Link className="navigator--text" onClick={() => dispatch({type:"LOGOUT"})} to="/">Logout</Link>
        </li>

       

    </ul>
    )
}
