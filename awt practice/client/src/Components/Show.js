import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { showUser,deleteUser } from '../apiData/Apidata';
import './component.css';

const Show = () => {
   const [user,setUser]= useState([]);

   useEffect(() => {
     
     tableData()
   }, [])

   const tableData = async () =>{
    const response= await showUser();
    setUser(response.data);
    console.log(response.data);
   }
   const ondelete= async(id)=>{
      await deleteUser(id);
      await tableData();

   }
   
  return (
    <div className='material'>
      <span>Users Data</span>
       <table className='tableData'>
        <tr className='content'>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {
          user.map((item,id)=>(
            <tr>
              <th>{id}</th>
              <th>{item.username}</th>
              <th>{item.email}</th>
              <th>{item.phone}</th>
              <th><Link to={`/${item._id}`}>Edit</Link></th>
              <th> <button onClick= { ()=> ondelete(item._id)}>Delete</button> </th>
            </tr>
          )) 
        }
        
       </table>
    </div>
  )
}

export default Show
