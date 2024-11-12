import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram-logo.png'
import pinterest_icon from '../Assets/pinterest-logo.png'
import whatsapp_icon from '../Assets/whatsapp-logo.png'
import footer_logo from '../Assets/logo.jpg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div> 
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div> 
        </div>
        <div>
           <div className="footer-copyright">
              <hr />
              <p>© 2024 Apie Sylvan. All rights reserved.</p>
          </div> 
        </div>
     </div>
  )
}

export default Footer
