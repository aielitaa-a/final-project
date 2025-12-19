import React from 'react'
import './sect2.css'
import ph from '../../../assets/Photo.png'
import cup from '../../../assets/cup.png'
import mail from '../../../assets/mail.png'
import { Link } from 'react-router-dom'


function Sect2() {
    return (
        <div className='sect2'>
            <div className="sec2">
                <img className='ph' src={ph} alt="" />
                <h1> About Us </h1>
                <h2> We Believe in Working <br />
                    Accredited Farmers </h2>
                <p> Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />
                    been the industry's standard dummy text ever since the 1500s, when an unknown <br />
                    printer took a galley. </p>
                <div className="blocks">
                    <img src={cup} alt="" />
                    <h3> Organic Foods Only </h3>
                    <p className='p1'> Simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum </p>
                    <img src={mail} alt="" />
                    <h3> Quality Standards </h3>
                    <p> Simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum </p>
                </div>
                <button className='shop-now'> 
                    <Link to='/Shop'> Shop Now 🡆 </Link> </button>
            </div>
        </div>
    )
}

export default Sect2