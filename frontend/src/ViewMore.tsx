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
        fetch(`/${viewById}`).then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setBlogs(jsonRes))
    })
   
    return(
        <div>
        <NavBar/>
        <Navigator/>
        <div className="view">
        <img className="card--img" src={datab.imageUrl} />  
        {datab.isDraft=="1" && <img className="card--logo" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DRAFT_ICON.png" />}
        <p className="card--text">author-id:{datab.aid} </p>
        
        <div className="card--tit">{datab.title}</div>
        <div className="card--dat">{datab.createdDate}</div>
        <p className="view--par">{datab.description}</p>
        <hr />
        </div>
        </div>
    )
}