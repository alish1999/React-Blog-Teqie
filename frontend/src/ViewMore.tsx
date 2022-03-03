import {useSelector } from "react-redux"
import Navigator from "./Navigator";
import NavBar from "./NavBar";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';





export default function ViewMore()
{
    const navigate = useNavigate()
    const viewById = useSelector((state : any) => state.viewById)
    const [datab,setBlogs]=useState({
        aid:"",
        isDraft:"",
        title:"",
        authorName:"",
        createdDate:"",
        description:"",
        imageUrl:"",

    })
    useEffect(()=>{
        fetch(`/get/${viewById}`).then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setBlogs(jsonRes))
    })
   function delblog(event)
   {
    event.preventDefault();
    navigate('/main', { replace: true });
    axios.delete(`/delete/${viewById}`)
    alert("Blog deleted")
   }
   function upblog(event)
   {
    navigate(`/update/${viewById}`, { replace: true });
   }

    return(
        <div>
        <NavBar/>
        <Navigator/>
        <div className="view">
        <img className="card--img" src={datab.imageUrl} alt=""/>  
        {datab.isDraft==="1" && <img className="card--draft" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DRAFT_ICON.png" />}
        <button className="card--update"  onClick={upblog}  >UPDATE BLOG </button>
        <button className="card--delete"  onClick={delblog}  >DELETE BLOG </button>
        <p className="card--text">author-id:{datab.aid} </p>
        
        <div className="card--tit">{datab.title}</div>
        <div className="card--dat">{datab.createdDate}</div>
        <p className="view--par">{datab.description}</p>
        <hr />
        </div>
        </div>
    )
}