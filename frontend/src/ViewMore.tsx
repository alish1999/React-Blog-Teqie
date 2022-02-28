import * as React from "react"

export default function ViewMore(props)
{
    console.log(props.dat);
    return(
        
        <div className="card--tit">{props.dat}</div>
        
    )
}