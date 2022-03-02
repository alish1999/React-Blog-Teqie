
import NavBar from "./NavBar"
import Navigator from "./Navigator"
import Card from "./Card"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"

export default function CreateBlog()
{
    const isLogged =useSelector((state : any)=>  state.logStatus)
    const [datab,setBlogs]=useState([{
            _id:"",
            aid:"",
            isDraft:"",
            title:"",
            authorName:"",
            createdDate:"",
            description:"",
            imageUrl:"",
    
        }])
        useEffect(()=>{
            fetch("/allblogs").then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonRes=>setBlogs(jsonRes))
        })
    const blogs = datab.map(item =>
    {
        return(
           
            <div>
            {
            (item.isDraft=="1"&& 
            <li> 
                <Card  
                    key={item._id}
                    {...item}
                />
            </li>
            )
            }
            
            </div>          
            
        )
    }
    )
    return(
       
        <div className="app">

            <NavBar/>
            <Navigator/>
           {//isLogged &&  //show blogs only if isLogged is true
            <section  className="list" >
                <ol>
                    {blogs}
                </ol>
            </section>
            }
        </div>
     
    )
}