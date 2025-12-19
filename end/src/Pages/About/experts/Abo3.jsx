import React from 'react'
import './abo3.css'
import gio from '../../../assets/giovani.png'
import mari from '../../../assets/marianne.png'
import riga from '../../../assets/riga.png'


function Abo3() {
    return (
        <div className='about3'>
            <div className="abo3">
                <h3 className='team-ab'> Team </h3>
                <h1 className='experts'> Our Organic Experts </h1>
                <p className='dummy-ab'> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br />
                    standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
            </div>
            <div className="experts-img">
                <div className="expert-img">
                    <img src={gio} alt="" />
                    <h4 className='bacardo'> Giovani Bacardo </h4>
                    <p className='farm1'> Farmer </p>
                </div>
                <div className="expert-img">
                    <img src={mari} alt="" />
                    <h4 className='loreno'> Marianne Loreno </h4>
                    <p className='design'> Designer </p>
                </div>
                <div className="expert-img">
                    <img src={riga} alt="" />
                    <h4 className='Pelore'> Riga Pelore </h4>
                    <p className='farm2'> Farmer </p>
                </div>
            </div>
        </div>
    )
}

export default Abo3
