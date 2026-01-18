import React from 'react'
import './cont1.css'
import cont from '../../../assets/cont.png'

function Cont1() {
  return (
    <div className='contact-banner-container'>
      <div className="contact-banner-wrapper">
        <img className='contact-banner-img' src={cont} alt="Contact Us Banner" />
        <div className="contact-banner-overlay">
          <h1 className='contact-banner-title'> CONTACT US </h1>
        </div>
      </div>
    </div>
  )
}

export default Cont1