import {useSelector } from "react-redux"
import Navigator from "../Components/Navigator";
import NavBar from "../Components/NavBar";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';





export default function ViewMore()
{
    const navigate = useNavigate()
    const myState = useSelector((state : any) => state.changeTheUser)
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
   function delblog(event) // delete blog
   {
    event.preventDefault();
    navigate('/main', { replace: true });
    axios.delete(`/delete/${viewById}`)
    alert("Blog deleted")
   }
   function upblog(event) // update blog 
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
        {
        myState===datab.authorName &&  //update/delete available only if the user is same as the author
        <>
        <button className="card--update"  onClick={upblog}  >UPDATE BLOG </button>
        <button className="card--delete"  onClick={delblog}  >DELETE BLOG </button>
        </>
        }
        <p className="card--text">author-name:{datab.authorName} </p>
        
        <div className="card--tit">{datab.title}</div>
        <div className="card--dat">{datab.createdDate}</div>
        <p className="view--par">{datab.description}</p>
        <hr />
        </div>
        </div>
    )
}