import React from 'react'
import './sing1.css'
import sing from '../../../assets/sing1.png'
import men from '../../../assets/men.jpg'

function Sing1() {
    return (
        <div className='single1'>
            <div className="sing1">
                <img className='sing-img' src={sing} alt="" />
                <h1 className='sing-text'> Quality Standard </h1>
            </div>
            <div className="men">
                <img className='sinmen' src={men} alt="" />
                <h1 className='sin-org'> Organic Store Services  </h1>
                <p className='sin-p'> it is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
                    using 'Content here, content here', making it look like readable English.
                    <p className='sin-p2'>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br />
                        and auncover many web sites still in their infancy. Various versions have evolved over the years
                    </p>

                </p>
            </div>
        </div>
    )
}

export default Sing1
