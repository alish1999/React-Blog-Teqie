import * as React from "react"
/*import ViewMore from "./ViewMore"

function Viewers(dat)
{
    return(
        <ViewMore dat={dat} />
    )
}
*/
export default function Card(props)
{
  
    return(
    <div className="card"  >
        <img className="card--img" src={props.imageUrl} />  
        <img className="card--logo" src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-authorName-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png" />
        <p className="card--text">author id: {props.aid}</p>
        <a className="card--link" href={props.googleMapsUrl}/*href={Viewers(props.description)}*/>View More.</a>
        <div className="card--tit">{props.title}</div>
        <div className="card--dat">{props.createdDate}</div>
        <p className="card--par">{props.description}</p>
        <hr />
    </div>
    )
}