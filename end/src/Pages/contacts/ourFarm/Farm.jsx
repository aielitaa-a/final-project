import React from 'react'
import './farm.css'
import contleav from '../../../assets/contleav.png'
import { MdLocationOn } from "react-icons/md";


function Farm() {
    return (
        <div className='our-farm'>
            <div className="farm">
                <img className='leav-cont' src={contleav} alt="" />
            </div>
            <div className="loc-cont">
                <h3 className='loc'> Location </h3>
                <h1 className='our-farms'> Our Farms </h1>
                <p className='Established'> Established fact that a reader will be distracted <br />
                    by the readable content of a page when looking <br />
                    a layout. The point of using. </p>
                <div className="location-ic">
                    <div className="loc-ic">
                        <MdLocationOn />
                    </div>
                    <div className="loc-text">
                        <h3> NEW-YORK,USA: <br />
                            <span>299 Park Avenue New York, <br />
                                New York 10171 </span> </h3>
                    </div>
                </div>
                <div className="location-ic">
                    <div className="loc-ic">
                        <MdLocationOn />
                    </div>
                    <div className="loc-text">
                        <h3> LONDON,UK: <br />
                            <span>London, UK:
                                30 Stamford Street, <br />
                                London SE1 9LQ </span> </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Farm
