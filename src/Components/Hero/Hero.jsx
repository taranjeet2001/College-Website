import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>Our cuttin-edge curriculum is designed to empower stidents with the knowledge , skills, and experiences need to excel in the dynamic fields of education.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
