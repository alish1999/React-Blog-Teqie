import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";

export default function Card(props)
{
const dispatch =useDispatch();

    return(
    <div className="card"  >
        <img className="card--img" src={props.imageUrl} alt="Image not found"/>  
        {props.isDraft==="1" && <img className="card--draft" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/DRAFT_ICON.png" />}
        <p className="card--text">author-name:{props.authorName} </p>
        <a className="card--link" onClick={() => dispatch({type:"GETBLOG",payload:props._id})}><Link to={`/viewmore/${props._id}`}>View More</Link></a>
        
        <div className="card--tit">{props.title}</div>
        <div className="card--dat">{props.createdDate}</div>
        <p className="card--par">{props.description}</p>
        
        <hr />
    </div>
    )
}