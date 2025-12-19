import React from 'react'
import './colors.css'
import color1 from '../../../assets/Background1.png'
import color2 from '../../../assets/Background2.png'
import color3 from '../../../assets/Background3.png'
import color4 from '../../../assets/Background4.png'
import color5 from '../../../assets/Background5.png'
import color6 from '../../../assets/Background6.png'
import color7 from '../../../assets/Background7.png'


function Colors() {
    return (
        <div className='colors'>
            <div className="color">
                <div className="col">
                    <img src={color1} alt="" />
                    <h3> #274C5B </h3>
                </div>
                <div className="col">
                    <img  className='color-2' src={color2} alt="" />
                    <h3> #7EB693 </h3>
                </div>
                <div className="col">
                    <img src={color3} alt="" />
                    <h3> #274C5B </h3>
                </div>
                <div className="col">
                    <img src={color4} alt="" />
                    <h3> #D4D4D4 </h3>
                </div>
            </div>
            <div className="color2">
                <div className="col2">
                    <img src={color5} alt="" />
                    <h3> #F9F8F8 </h3>
                </div>
                <div className="col2">
                    <img src={color6} alt="" />
                    <h3> #EFF6F1 </h3>
                </div>
                <div className="col2">
                    <img src={color7} alt="" />
                    <h3> #525C60 </h3>
                </div>
            </div>
        </div>
    )
}

export default Colors
