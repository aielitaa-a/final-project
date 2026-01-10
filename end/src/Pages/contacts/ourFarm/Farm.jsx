import React from 'react'
import './farm.css'
import { MdLocationOn } from "react-icons/md";

function Farm() {
    return (
        <section className='farm-section'>
            <div className="container farm-container">
                <div className="loc-card">
                    <h3 className='loc'>Location</h3>
                    <h2 className='our-farms'>Our Farms</h2>
                    <p className='established-text'>
                        Established fact that a reader will be distracted by the readable 
                        content of a page when looking a layout. The point of using.
                    </p>
                    
                    <div className="location-item">
                        <div className="loc-icon-bg">
                            <MdLocationOn />
                        </div>
                        <div className="loc-text">
                            <h4>NEW-YORK, USA:</h4>
                            <p>299 Park Avenue New York, New York 10171</p>
                        </div>
                    </div>

                    <div className="location-item">
                        <div className="loc-icon-bg">
                            <MdLocationOn />
                        </div>
                        <div className="loc-text">
                            <h4>LONDON, UK:</h4>
                            <p>30 Stamford Street, London SE1 9LQ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Farm