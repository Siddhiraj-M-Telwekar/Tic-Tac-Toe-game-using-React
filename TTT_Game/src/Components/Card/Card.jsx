import { useState } from "react";
import Icons from "../Icons/Icons";
import './Card.css';

function Card({onPlay,player,index,gameEnd}){

    let icon=<Icons/>
    if(player=="X"){
        icon=<Icons name={"Cross"}/>
    }
    else if(player=="O"){
         icon=<Icons name={"Circle"}/>
    }
   
    
    return(
        <div className="card" onClick={()=>!gameEnd && player=='' && onPlay(index)}>
           {icon}
        </div>
    )
    
}

export default Card;