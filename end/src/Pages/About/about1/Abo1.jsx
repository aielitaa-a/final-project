import React from 'react'
import './abo.css'
import firstab from '../../../assets/abimg.png'
import salad from '../../../assets/salad.png'
import { FaTractor } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { Link } from 'react-router-dom'

function Abo1() {
    return (
        <div className='about'>
            <div className="about-header">
                <img className='header-bg' src={firstab} alt="About Us Background" />
                <h1 className='header-title'>ABOUT US</h1>
            </div>

            <div className="container">
                <div className="about-content">
                    <div className="about-image-side">
                        <img className='salad-img' src={salad} alt="Salad" />
                    </div>
                    
                    <div className="about-text-side">
                        <h3 className='about-subtitle'>About Us</h3>
                        <h1 className='about-main-title'>We do Creative <br /> Things for Success</h1>
                        
                        <p className='about-description'>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
                            to been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley.
                        </p>
                        <p className='about-description'>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
                            to been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item">
                                <FaTractor className="feature-icon" />
                                <h2 className='feature-text'>Modern Agriculture <br /> Equipment</h2>
                            </div>
                            <div className="feature-item">
                                <HiBuildingOffice2 className="feature-icon" />
                                <h2 className='feature-text'>No growth <br /> hormones are used</h2>
                            </div>
                        </div>

                        <button className='btn-about'>
                            <Link to="/Services">Explore Now ➔</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abo1