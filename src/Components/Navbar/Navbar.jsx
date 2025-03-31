import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src = {logo} alt = "" />
            <p>Aniths Drapes</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: "none"}} to = '/'>Shop</Link>{menu === "shop" ? <hr/> : ""}</li>
            <li onClick={() => {setMenu("saree")}}><Link style={{textDecoration: "none"}} to={'/saree'}>Saree</Link>{menu === "saree" ? <hr/> : ""}</li>
            <li onClick={() => {setMenu("blouse")}}><Link style={{textDecoration: "none"}} to={'/blouse'}>Blouse</Link>{menu === "blouse" ? <hr/> : ""}</li>
            {/* <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: "none"}} to={'/kids'}>Kids</Link>{menu === "kids" ? <hr/> : ""}</li> */}
        </ul>
        {/* <div className="nav-login-cart">
            <Link to='/ecommerce-navdeep/login'><button>Login</button></Link>
            <Link to='/ecommerce-navdeep/cart'><img src = {cart_icon} alt = ""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div> */}
    </div>
  )
}
