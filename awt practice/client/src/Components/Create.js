import React from "react"
import './component.css'
import { useState } from "react"
import { createUser } from "../apiData/Apidata"
import {useNavigate} from "react-router-dom"



const Create = () =>{
  
     const navigate = useNavigate();
    const defaultUser = {
        username:'',
        email:'',
        phone:'',

    }
    const [data, setData] = useState(defaultUser);

    const handleUser = (e) =>{
      setData({...data,[e.target.name]:e.target.value} )
    }
    const submitData = (e)=>{
        e.preventDefault();
        createUser(data);
        navigate("/show");
    }
    return(
        <div className="userData">
            <form className="formData" >
               <label>Username</label>
                <input type="text" name='username' onChange={(e)=>handleUser(e)} />
                <label>Email id</label>
                <input type="email" name='email' onChange={(e)=>handleUser(e)}/>
                <label>Phone Number</label>
                <input type="number"name="phone" onChange={(e)=>handleUser(e)}/>
                <button onClick={(e)=>submitData(e)}>Add user</button>
            </form>
        </div>
    )
}

export default Create;