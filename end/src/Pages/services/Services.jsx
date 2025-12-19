import React from 'react'
import './services.css'
import serv from '../../assets/service.png'
import fist from '../../assets/serv.png'
import { LuMilk } from "react-icons/lu";
import { HiBuildingStorefront } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";

import { ImLeaf } from "react-icons/im";
import { PiFarmFill } from "react-icons/pi";
import { PiCarrotFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

import ServFoot from './servFoot/ServFoot';

function Services() {
  return (
    <div className="serv">
      <div className="service">
        <img className='first-serv' src={serv} alt="" />
        <h1 className='serv-text'> Services </h1>
      </div>
      <div className="fist-img">
        <h3 className='grow'> What we Grow </h3>
        <h1 className='Agriculture'> Better Agriculture for
          <br />Better Future </h1>
        <img className='fistashka' src={fist} alt="" />
      </div>
      <div className="left-serv">
        <div className="lserv">
          <LuMilk />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div>
        <div className="lserv">
          <HiBuildingStorefront />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div><div className="lserv">
          <TbTruckDelivery />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div>
      </div>

      <div className="right-serv">
        <div className="rserv">
          <ImLeaf />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div>
        <div className="rserv">
          <PiFarmFill />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div>
        <div className="rserv">
          <PiCarrotFill />
          <h4> Dairy Products </h4>
          <p> Sed ut perspiciatis unde omnis iste natus error <br />
            sit voluptat accusantium doloremqlaudantium. <br />
            Sed ut perspiciatis </p>
        </div>
        <button className='serv-btn'>
          <Link to='/Single'> Shop Now 🡆 </Link> </button>
      </div>
    <ServFoot/>
    </div>
  )
}

export default Services
