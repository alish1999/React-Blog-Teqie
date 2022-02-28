import NavBar from "./NavBar"
import Card from "./Card"
import datarr from "./data"
import Navigator from "./Navigator"
import { useSelector } from "react-redux"

export default function Main()
{
    //const myState = useSelector((state : any) => state.changeTheUser);
        const isLogged =useSelector((state : any)=>  state.logStatus)

    const blogs = datarr.map(item =>
    {
        return(
           
            <div>
            {
            (item.isDraft==0 && 
            <li> 
                <Card  
                    key={item.id}
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