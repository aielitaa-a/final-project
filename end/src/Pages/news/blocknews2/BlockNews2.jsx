import React from 'react'
import './blocknews2.css'
import leavnews from '../../../assets/leavs.png'
import tomatnews from '../../../assets/tomatoes.png'
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BlockNews2() {
  return (
    <div className='blockNews2'>
    <div className="blockNews-img">
    <img className='leavs' src={leavnews} alt="" />
    <img className='tomato' src={tomatnews} alt="" />
        <div className="block-news">
            <div className="blocks-news">
                <div className="profile-news">
                    <BsPersonFill /> <p className='rachi-news'> By Rachi Card </p>
                </div>
                <h1 className='benefist-news'> Everything You Need to Know Organik </h1>
                <p className='p7'> Organic farming is the only way that you still <br />
                experience the real world. </p>
                <button className='load-more-news' >
                    <Link to='/NewsandBlog3'> Load More  🡆 </Link>  </button>
            </div>
            <div className="blocks-news">
                <div className="profile-news">
                    <BsPersonFill /> <p className='rachi-news'>Alex Louis </p>
                </div>
                <h1 className='benefist-news'> Orgnic Fruits: Surprising Benefits Facts </h1>
                <p className='p7-news'> The world of nature has grown on the principles <br />
                of health, ecology, and care. </p>
                <button className='load-more-news' >
                    <Link to="/NewsandBlog4"> Load More  🡆 </Link>  </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default BlockNews2
