import React from 'react'
import './sec7.css'
import { Link } from 'react-router-dom'
import leavnews from '../../../assets/leavs.png'
import tomatnews from '../../../assets/tomatoes.png'
import { BsPersonFill } from "react-icons/bs";



function Sec7() {
    return (
        <div className='sec7'>
            <div className="sect7">
                <h3 className='news-7'> News </h3>
                <button className='more-newws'> <Link to='/News'> More News 🡆 </Link> </button>
                <h1 className='discover'> Discover weekly content about <br />
                    organic food, & more </h1>
                    <img className='leavs' src={leavnews} alt="" />
                    <img className='tomato' src={tomatnews} alt="" />
                <div className="block-7">
                    <div className="blocks-7">
                        <div className="profile">
                        <BsPersonFill /> <p className='rachi'> By Rachi Card </p>
                        </div>
                        <h1 className='benefist'>  Everything You Need to Know Organik </h1>
                        <p className='p7'> Organic farming is the only way that you still <br />
                        experience the real world. </p>
                            <button className='load-more7' >
                            <Link to='/NewsandBlog3'> Load More  🡆 </Link>  </button>
                    </div>
                    <div className="blocks-7">
                        <div className="profile">
                        <BsPersonFill /> <p className='rachi'> By Rachi Card </p>
                        </div>
                        <h1 className='benefist'> Orgnic Fruits: Surprising Benefits Facts </h1>
                        <p className='p7'> The world of nature has grown on the principles <br />
                        of health, ecology, and care. </p>
                            <button className='load-more7' >
                            <Link to='/NewsandBlog4'> Load More  🡆 </Link>  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec7
