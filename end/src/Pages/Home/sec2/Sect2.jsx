import React from 'react'
import './sect2.css'
import ph from '../../../assets/Photo.png'
import cup from '../../../assets/cup.png'
import mail from '../../../assets/mail.png'
import { Link } from 'react-router-dom'

function Sect2() {
    return (
        <section className='sect2'>
            <div className="container sec2-content">
                <div className="sec2-image">
                    <img src={ph} alt="Fruits" />
                </div>
                
                <div className="sec2-text">
                    <span className='subtitle'>About Us</span>
                    <h2>We Believe in Working <br /> Accredited Farmers</h2>
                    <p className='description'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                        been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley.
                    </p>

                    <div className="features">
                        <div className="feature-item">
                            <div className="icon-box">
                                <img src={cup} alt="Organic" />
                            </div>
                            <div className="feature-info">
                                <h3>Organic Foods Only</h3>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-box">
                                <img src={mail} alt="Quality" />
                            </div>
                            <div className="feature-info">
                                <h3>Quality Standards</h3>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>

                    <Link to='/Shop' className='shop-now'>Shop Now 🡆</Link>
                </div>
            </div>
        </section>
    )
}

export default Sect2