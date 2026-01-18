import React from 'react'
import './abo2.css'
import green from '../../../assets/greenabo.jpg'
import { FaRegCircle } from "react-icons/fa6";
import { TbShoppingCartUp } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FaIdCard } from "react-icons/fa6";

function Abo() {
    return (
        <div className='about2'>
            <div className="container">
                <div className="abo2-main">
                    <div className="abo2-content">
                        <h3 className='why-abo'>Why Choose us?</h3>
                        <h1 className='not-buy'>We do not buy from the <br /> open market & traders.</h1>
                        <p className='dummy-abo'>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
                            to been the industry's standard the 1500s, when an unknown
                        </p>

                        <div className="benefit-item">
                            <div className="benefit-capsule">
                                <FaRegCircle className="circle-icon" />
                                <h2 className='natural-abo'>100% Natural Product</h2>
                            </div>
                            <p className='benefit-desc'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-capsule">
                                <FaRegCircle className="circle-icon" />
                                <h2 className='increases'>Increases resistance</h2>
                            </div>
                            <p className='benefit-desc'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                        </div>
                    </div>

                    <div className="abo2-image">
                        <img className='green-about' src={green} alt="Organic food" />
                    </div>
                </div>

                {/* Нижняя часть: 4 карточки */}
               
            </div>
            <div className="four-block">
                    <div className="block-one">
                        <TbShoppingCartUp />
                        <h2 className='card-title'>Return Policy</h2>
                        <p className='industry'>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="block-one">
                        <ImLeaf />
                        <h2 className='card-title'>100% Fresh</h2>
                        <p className='industry'>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="block-one">
                        <HiOutlinePhoneOutgoing />
                        <h2 className='card-title'>Support 24/7</h2>
                        <p className='industry'>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                    <div className="block-one">
                        <FaIdCard />
                        <h2 className='card-title'>Secured Payment</h2>
                        <p className='industry'>Simply dummy text of the printintypesetting industry.</p>
                    </div>
                </div>
        </div>
    )
}

export default Abo