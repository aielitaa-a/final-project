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
            <div className="abo2">
                <h3 className='why-abo'> Why Choose us? </h3>
                <img className='green-about' src={green} alt="" />
                <h1 className='not-buy'> We do not buy from the <br />
                    open market & traders. </h1>
                <p className='dummy-abo'> Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
                    to been the industry's standard  the 1500s, when an unknown </p>
                <div className="block1-abo">
                    <FaRegCircle />
                    <h2 className='natural-abo'> 100% Natural Product </h2>
                </div>
                <p className='p-abo'> Simply dummy text of the printing and typesetting <br />
                    industry Lorem Ipsum </p>
                <div className="block2-abo">
                    <FaRegCircle />
                    <h2 className='increases'> Increases resistance</h2>
                </div>

                <p className='filling' > Filling, and temptingly healthy, our Biona Organic <br />
                    Granola with Wild Berries is just the thing</p>
                <div className="four-block">
                    <div className="block-one">
                        <TbShoppingCartUp />
                        <h2 className='Policy'> Return Policy </h2>
                        <p className='industry'> Simply dummy text of <br />
                            the printintypesetting <br />
                            industry. </p>
                    </div>
                    <div className="block-one">
                        <ImLeaf />
                        <h2 className='hundr'> 100% Fresh </h2>
                        <p className='industry'> Simply dummy text of <br />
                            the printintypesetting <br />
                            industry. </p>
                    </div>
                    <div className="block-one">
                        <HiOutlinePhoneOutgoing />
                        <h2 className='Support'> Support 24/7 </h2>
                        <p className='industry'> Simply dummy text of <br />
                            the printintypesetting <br />
                            industry. </p>
                    </div>
                    <div className="block-one">
                        <FaIdCard />
                        <h2 className='Payment'> Secured Payment </h2>
                        <p className='industry'> Simply dummy text of <br />
                            the printintypesetting <br />
                            industry. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abo
