import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='list'>
        <li >
           <Link to="/create"> Create user </Link></li>
        <li>
           <Link to="/show"> Show user </Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
