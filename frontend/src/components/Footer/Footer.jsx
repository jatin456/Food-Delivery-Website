import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo1} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum error quae ab asperiores accusantium recusandae odio, veniam quasi, omnis velit cumque itaque aut minima in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero tempora quas illo quasi soluta. </p> 
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+919876543211</li>
            <li>contact@foodvilla.com</li>
        </ul>
        </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 @ Food_Villa.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
