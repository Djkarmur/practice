import React, { useEffect } from "react"
import './component.css'
import { useState } from "react"
import { getUser,updateUser } from "../apiData/Apidata"
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom"



const Edit = () =>{
  
    const navigate = useNavigate();
    const {id}=useParams();
    const defaultUser = {
        username:'',
        email:'',
        phone:'',

    }
    const [data, setData] = useState(defaultUser);
    
   useEffect(() => {
     const singleData = async () =>{
      const response= await getUser(id);
      setData(response.data);
      console.log(data);
     }
     singleData();
     
   }, [])
   
    const handleUser = (e) =>{
      setData({...data,[e.target.name]:e.target.value} )
    }
    const submitData = (e)=>{
        e.preventDefault();
        updateUser(data,id);
        navigate("/show");
    }
    return(
        <div className="userData">
            <span>Update User</span>
            <form className="formData" >
               <label>Username</label>
                <input type="text" name='username' value={data.username} onChange={(e)=>handleUser(e)} />
                <label>Email id</label>
                <input type="email" name='email' value={data.email}  onChange={(e)=>handleUser(e)}/>
                <label>Phone Number</label>
                <input type="number"name="phone" value={data.phone}  onChange={(e)=>handleUser(e)}/>
                <button onClick={(e)=>submitData(e)}>Edit user</button>
            </form>
        </div>
    )
}

export default Edit;