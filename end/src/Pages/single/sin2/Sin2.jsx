import React from 'react'
import './sin2.css'
import dirty from '../../../assets/dirt.jpg'
import plants from '../../../assets/plants.jpg'

function Sin2() {
    return (
        <div className='single2'>
            <div className="sin2">
                <div className="dirt-img">
                </div>
                <div className="sin-block1">
                <img className='dirt' src={dirty} alt="" />
                    <div className="sin-blok1">
                    <h2 className='Speciality1'> Speciality Produce </h2>
                    <p className='sed1'> Sed ut perspiciatis unde omnis iste natus error sit <br />
                        voluptat. page editors now use Lorem Ipsum as their <br />
                        default model text, and auncover. </p>
                    </div>

                </div>
                <div className="sin-block2">
                    <div className="sin-blok2">
                    <h2 className='Speciality2'> Speciality Produce </h2>
                    <p className='sed2'> Sed ut perspiciatis unde omnis iste natus error sit <br />
                        voluptat. page editors now use Lorem Ipsum as their <br />
                        default model text, and auncover. </p>
                    </div>
                        <img className='plan' src={plants} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sin2
