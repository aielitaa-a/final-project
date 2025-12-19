import React from 'react'
import './headnot.css'
import not from '../../../assets/404.png'
import { Link } from 'react-router-dom'

function HeadNot() {
    return (
        <div className='NotFound'>
            <div className="not">
                <img className='not-img' src={not} alt="" />
                <h1 className='text-not'> 404 </h1>
                <h2 className='page-not'> Page not found </h2>
                <p className='looking-not'> The page you are looking for doesn't exist or has been moved </p>
            </div>
            <button className='not-btn'> <Link to='/About'> Go to Homepage 🡆 </Link> </button>
        </div>
    )
}

export default HeadNot
