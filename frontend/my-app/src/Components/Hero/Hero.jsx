import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero-image.jpg'
import hand_logo from '../Assets/hand-logo.jpg'
import right_arrow from '../Assets/right-arrow.png'
export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_logo} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div> 
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={right_arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}
export default Hero