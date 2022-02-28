import * as React from "react"
import {useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function NavBar()
{
    const myState = useSelector((state : any) => state.changeTheUser)
    const isLogged =useSelector((state : any)=> state.logStatus)

    return(
        <nav className="navBar">
       <div className="navBar--text">React - Blog</div>
       <div className="navBar--welcome">Welcome ,{isLogged && myState}</div>{/*show name only if isLogged is true */}
       
        </nav>
    )
}