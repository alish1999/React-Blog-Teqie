import * as React from "react"
import { Link } from "react-router-dom"

export default function Navigator()
{
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

       

    </ul>
    )
}
