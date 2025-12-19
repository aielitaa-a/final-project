import React from 'react'
import './sec11.css'
import fon from '../../../assets/fon.png'
import { Link } from 'react-router-dom'


function Sect11() {
    return (
        <div className='second-parent'>
            <div className="fons">
                <h1 className='natural-text'> 100% Natural Food </h1>
                <h1 className='choose'> Choose the best <br />
                    healthier way <br />
                    of life  </h1>
                <button className='btn'>
                    <Link to="/Shop"> Explore Now 🡆 </Link> </button>
            </div>
        </div>
    )
}

export default Sect11
