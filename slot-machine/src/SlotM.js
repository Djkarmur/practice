import React from "react";
const SlotM = (props) =>{
    let x=props.x;
    let y=props.y;
    let z=props.z;

if(x===y && y===z){
    return(
        <>
        <div className="innerslot">
            <h2>{x}{y}{z}</h2>
            <h2> this is matching</h2>
            <hr/>
         </div>    
        </>
    )
} else{
    return(
        <>
        <div className="innerslot">
            <h2>{x}{y}{z}</h2>
            <h2> this is  not matching</h2>
            <hr/>
        </div>
        </>
    )
}
}

export  default SlotM; 