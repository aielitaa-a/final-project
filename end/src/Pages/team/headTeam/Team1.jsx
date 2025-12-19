import React from 'react'
import './team1.css'
import teimg from '../../../assets/team.png'
import gio from '../../../assets/giovani.png'
import mari from '../../../assets/marianne.png'
import riga from '../../../assets/riga.png'
import keira from '../../../assets/keira.png'
import scott from '../../../assets/scott.png'
import karen from '../../../assets/karen.png'


function Team1() {
    return (
        <div className='team1'>
            <div className="tea1">
                <img className='head-team' src={teimg} alt="" />
                <h1 className='team-text'> OUR TEAM </h1>
            </div>
            <div className="our-twam">
                <h3 className='team-team'> Team </h3>
                <h1 className='team-org' > Our Organic Experts </h1>
                <p className='team-dummy'> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br />
                    standard dummy text ever since the 1500s, when an unknown printer took a galley. </p>
            </div>
            <div className="experts-img2">
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
                <div className="expert-img">
                    <img src={keira} alt="" />
                    <h4 className='Knightley'> Riga Pelore </h4>
                    <p className='farm3'> Farmer </p>
                </div>
                <div className="expert-img">
                    <img src={scott} alt="" />
                    <h4 className='Lawrence'> Riga Pelore </h4>
                    <p className='farm2'> Farmer </p>
                </div>
                <div className="expert-img">
                    <img src={karen} alt="" />
                    <h4 className='Allen'> Riga Pelore </h4>
                    <p className='design2'> Farmer </p>
                </div>
            </div>
            
        </div>
    )
}

export default Team1
