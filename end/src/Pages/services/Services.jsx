import React from 'react';
import './services.css';
import servBanner from '../../assets/service.png';
import pistachioImg from '../../assets/serv.png';
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
    <div className="serv-page">
      <div className="service-hero">
        <img className='hero-bg' src={servBanner} alt="Banner" />
        <h1 className='hero-title'>Services</h1>
      </div>

      <div className="services-container">
        <div className="services-intro">
          <h3 className='intro-subtitle'>What we Grow</h3>
          <h1 className='intro-title'>Better Agriculture for <br /> Better Future</h1>
        </div>

        <div className="services-grid">
          

          <div className="side-column left-side">
            <div className="service-card">
              <LuMilk className="service-icon" />
              <h4>Dairy Products</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
            <div className="service-card">
              <HiBuildingStorefront className="service-icon" />
              <h4>Store Services</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
            <div className="service-card">
              <TbTruckDelivery className="service-icon" />
              <h4>Delivery Services</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
          </div>


          <div className="center-image-wrapper">
            <img className='pistachio-main' src={pistachioImg} alt="Pistachios" />
          </div>


          <div className="side-column right-side">
            <div className="service-card">
              <ImLeaf className="service-icon" />
              <h4>Agricultural Services</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
            <div className="service-card">
              <PiFarmFill className="service-icon" />
              <h4>Organic Products</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
            <div className="service-card">
              <PiCarrotFill className="service-icon" />
              <h4>Fresh Vegetables</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
            </div>
          </div>

        </div>


        <div className="services-action">
          <Link to='/Single' className='btn-shop-now'>
            Shop Now ➔
          </Link>
        </div>
      </div>

      <ServFoot />
    </div>
  );
}

export default Services;