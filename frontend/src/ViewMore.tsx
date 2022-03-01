import * as React from "react"
import {useSelector } from "react-redux"
import Navigator from "./Navigator";
import NavBar from "./NavBar";
import { useState,useEffect } from "react";
export default function ViewMore()
{
    const viewById = useSelector((state : any) => state.viewById)
    const [datab,setBlogs]=useState({
        id:"",
        aid:"",
        isDraft:"",
        title:"",
        authorName:"",
        createdDate:"",
        description:"",
        imageUrl:"",

    })
    useEffect(()=>{
        fetch(`/:${viewById}`).then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setBlogs(jsonRes))
    })
   
    return(
        <div>
        <NavBar/>
        <Navigator/>
         <button onClick={() =>console.log(datab)}>fetch</button>
        <div>CARD ID : {viewById}</div>
        </div>
    )
}