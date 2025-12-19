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
            <div className="about-us">
                <img className='first-about' src={firstab} alt="" />
                <h1 className='about-text'> ABOUT US  </h1>
            </div>

            <img className='salad-img' src={salad} alt="" />
            <h3 className='about-about'> About Us </h3>
            <h1 className='create-things'> We do Creative <br />
                Things for Success </h1>
            <p className='about-p1'> Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
                to been the industry's standard dummy text ever since the 1500s, when an <br />
                unknown printer took a galley.</p>

            <p className='about-p2'> Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
                to been the industry's standard dummy text ever since the 1500s, when an <br />
                unknown printer took a galley.</p>
            <div className="ic">
                <FaTractor />
                <h2 className='agriculture'> Modern Agriculture <br /> Equipment </h2>
            </div>
            <div className="ic2">
                <HiBuildingOffice2 />
                <h2 className='growth'>No growth <br />
                    hormones are used </h2>
            </div>
            <button className='btn-about'>
            <Link to="/Services"> Explore Now 🡆 </Link> </button>

        </div>
    )
}

export default Abo1
