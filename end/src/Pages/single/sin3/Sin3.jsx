import React from 'react'
import './sin3.css'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";



function Sin3() {
    return (
        <div className='single3'>
            <div className="sin3">
                <h1 className='sin-farm'> We farm your land </h1>
                <p className='established'> It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br />
                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br />
                    using 'Content here, content here', making it look like readable English. </p>
            </div>
            <div className="numbers">
            <div className="sin-one">
                <TbCircleNumber1Filled/>
                <h4 className='quality'> Best quality support </h4>
            </div>
            <div className="sin-two">
                <TbCircleNumber2Filled/>
                <h4 className='quality2'> Money back guarantee </h4>
            </div>
            </div>

        </div>
    )
}

export default Sin3
