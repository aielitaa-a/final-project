import React from 'react'
import foot8 from '../../../assets/top-img.jpg'
import logofoot from '../../../assets/Logo.png'
import { Link } from 'react-router-dom'

function FootStyle() {
  return (
    <div className='footer8'>
            <div className="foot8">
                <img className='img8' src={foot8} alt="" />
                <h1 className='hope'> We hope you like our website! If you have any suggestions, <br />
                    we are always happy to hear them. </h1>
            </div>
            <div className="foott88">
                <img className='foot-logo-img' src={logofoot} alt="" />
                <h1 className='logo-foot'> Organick </h1>
                <h1 className='contact8'> Contact Us </h1>
                <h1 className='Utility-Pages'> Utility Pages </h1>

                <h5 className='email'> Email <br />
                    <span> <Link to='/contacts'>  aielitaalmaz@gmail.com  </Link> </span> </h5>
                <h5 className='phonee'> Phone <br /> <span> <Link to='/contacts' >  0702 60 46 60  </Link></span> </h5>
                <h1 className='adresss'> Adress <br /> <span><Link to='/contacts' >   88 road, borklyn street, USA </Link> </span>  </h1>
                <ul className='ul-foot'>
                    <li> <Link to='/style'>  Style Guide </Link></li>
                    <li className='not-found'> <Link to='/notfound'>  404 Not Found </Link> </li>
                    <li> <Link to="/Licenses"> Licenses </Link>  </li>
                </ul>
                
                <p className='dummy-foot'> Simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum simply dummy text of the printing  </p>
            </div>
        </div>
  )
}

export default FootStyle
