import React from 'react'
import './sec4.css'
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'
import girl from '../../../assets/girl.jpg'
import { TiStarFullOutline } from "react-icons/ti";




function Sec4() {
  return (
    <div className='sec4'>
      <div className="sect4">
        <img className='left' src={left} alt="" />
        <img className='right' src={right} alt="" />
        <h2 className='testimonial'> Testimonial </h2>
        <h1 className='customer'> What Our Customer Saying? </h1>
        <img className='girl' src={girl} alt="" />
        <div className="stars">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </div>
        <p className='dummy'> Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br />
          text of the printing and typesetting industry. Lorem Ipsum has been. </p>
        <h3 className='sara'> Sara Taylor </h3>
        <h5 className='consumer'> Consumer </h5>
      </div>
      <div className="sircls">
        <div className="sircl">
          <h1 className='organic'> 100% <br />
            <span> Organic </span>
          </h1>
        </div>
        <div className="sircl">
          <h1 className='active'> 285 <br />
            <span> Active Product </span>
          </h1>
        </div>
        <div className="sircl">
          <h1 className='Orchads'> 350+ <br />
            <span> Organic Orchads </span>
          </h1>
        </div>
        <div className="sircl">
          <h1 className='farming'> 25+ <br />
            <span> Years of Farming </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Sec4
