import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/logo.jpg' 
import nav_profile from '../../assets/nav-profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={nav_logo} alt=""  />
          <h3>SHOPPER</h3>
          <p>Admin Panel</p>  
        </div>
        <img src={nav_profile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar