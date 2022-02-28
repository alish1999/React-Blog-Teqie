import * as React from "react"
import { Link } from "react-router-dom"

export default function Navigator()
{
    return(
    <ul className="navBar--navigator">
         <li className="navigator--text">
            <Link to="/main">Home</Link>
        </li>
        <li className="navigator--text">
            <Link to="/viewdrafts">View Drafts</Link>
        </li>
        <li className="navigator--text">
            <Link to="/create">Create Blog</Link>
        </li>

       

    </ul>
    )
}
