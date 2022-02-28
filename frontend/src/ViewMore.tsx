import * as React from "react"
import {useSelector } from "react-redux"
import Navigator from "./Navigator";
import NavBar from "./NavBar";
export default function ViewMore()
{
    const viewById = useSelector((state : any) => state.viewById)

    console.log();
    return(
        <div>
        <NavBar/>
        <Navigator/>
        <div>CARD ID : {viewById}</div>
        </div>
    )
}