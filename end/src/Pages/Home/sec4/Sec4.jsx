import React from 'react'
import './sec4.css'
import { TiStarFullOutline } from "react-icons/ti";
import sara from '../../../assets/girl.jpg'

function Sec4() {
  return (
    <div className='sec4-wrapper'>
      <section className="testimonial-section">
        <div className="container testimonial-container">
          <h2 className='testimonial-label'>Testimonial</h2>
          <h1 className='main-title'>What Our Customer Saying?</h1>
          
          <div className="profile-block">
            <img className='saras-ava' src={sara} alt="" />
            <div className="stars">
              <TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline />
            </div>
            <p className='testimonial-text'>
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy 
              text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            <h3 className='author-name'>Sara Taylor</h3>
            <p className='author-role'>Consumer</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-container">
          <div className="stat-item">
            <div className="circle">
              <h2>100%</h2>
              <span>Organic</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="circle">
              <h2>285</h2>
              <span>Active Product</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="circle">
              <h2>350+</h2>
              <span>Organic Orchads</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="circle">
              <h2>25+</h2>
              <span>Years of Farming</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sec4;