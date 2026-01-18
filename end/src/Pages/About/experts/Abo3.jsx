import React from 'react'
import './abo3.css'
import gio from '../../../assets/giovani.png'
import mari from '../../../assets/marianne.png'
import riga from '../../../assets/riga.png'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Abo3() {
    return (
        <div className='about3'>
             <div className="abo3-header">
                    <h3 className='team-ab'>Team</h3>
                    <h1 className='experts'>Our Organic Experts</h1>
                    <p className='dummy-ab'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>
            <div className="container">
               

                <div className="experts-grid">
                    {/* Карточка 1 */}
                    <div className="expert-card">
                        <div className="expert-image">
                            <img src={gio} alt="Giovani Bacardo" />
                        </div>
                        <div className="expert-info">
                            <div className="info-text">
                                <h4 className='expert-name'>Giovani Bacardo</h4>
                                <p className='expert-role'>Farmer</p>
                            </div>
                        </div>
                    </div>

                    {/* Карточка 2 */}
                    <div className="expert-card">
                        <div className="expert-image">
                            <img src={mari} alt="Marianne Loreno" />
                        </div>
                        <div className="expert-info">
                            <div className="info-text">
                                <h4 className='expert-name'>Marianne Loreno</h4>
                                <p className='expert-role'>Designer</p>
                            </div>
                        </div>
                    </div>

                    {/* Карточка 3 */}
                    <div className="expert-card">
                        <div className="expert-image">
                            <img src={riga} alt="Riga Pelore" />
                        </div>
                        <div className="expert-info">
                            <div className="info-text">
                                <h4 className='expert-name'>Riga Pelore</h4>
                                <p className='expert-role'>Farmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abo3