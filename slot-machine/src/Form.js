import React, { useState } from "react";

const Form = () =>{
    let but;
    const state= useState();
    const [original,changefun]=useState();
    const [text,textfun]=useState();
    const [pass,passfunc]=useState();
    const [finalpass,finalfun]=useState();
    const changes = (ev) =>{
         changefun(ev.target.value);
       
    } 
    const pass_change = (ev) =>{
        passfunc(ev.target.value);
    }
    

    const nowchanges = (event) =>{
        console.log(but);
        textfun(original);
        finalfun(pass);
        // event.preventDefault();
    }
    return ( 
        <>
        {/* <form onSubmit={nowchanges}> */}
        <h1> Hello {text} {finalpass}</h1>
        <input type="text" placeholder="Enter Your Name" onChange={changes}  />
        <input type='text' placeholder="Enter your password" onChange={pass_change} />
        <button onClick={nowchanges}>submit</button> 
        {/* </form> */}
        </>
    )
    
}

export default Form;