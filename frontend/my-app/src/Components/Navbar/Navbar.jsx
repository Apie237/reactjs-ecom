import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart-icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Contexts/ShopContext';

 const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {
          setMenu("shop")
        }}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu === "shop"? <hr></hr> : <></>}</li >
        <li onClick={() => {
          setMenu("men")
        }}><Link to='/men' style={{textDecoration: 'none'}}>Men</Link>{menu === "men"? <hr></hr> : <></>}</li>
        <li onClick={() => {
          setMenu("women")
        }}><Link to='/women' style={{textDecoration: 'none'}}>Women</Link>{menu === "women"? <hr></hr> : <></>}</li>
        <li onClick={() => {
          setMenu("kids")
        }}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu === "kids"? <hr></hr> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ? <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      : <Link to='/login' style={{textDecoration: 'none'}}><button>Login</button></Link>}
        <Link to='/cart' style={{textDecoration: 'none'}}><img src={cart_icon} alt=""></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar
