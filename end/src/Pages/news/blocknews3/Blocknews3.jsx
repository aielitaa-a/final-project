import React from 'react'
import './blocknews3.css'
import girlnews from '../../../assets/girlnews.png'
import vegie from '../../../assets/vagnews.png'
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

function Blocknews3() {
  return (
    <div className='blockNews3'>
    <div className="blockNews-img">
        <img className='leavs' src={girlnews} alt="" />
        <img className='tomato' src={vegie} alt="" />
        <div className="block-news">
            <div className="blocks-news">
                <div className="profile-news">
                    <BsPersonFill /> <p className='rachi-news'> By Rachi Card </p>
                </div>
                <h1 className='benefist-news'> Work Process of Organic Farming </h1>
                <p className='p7'> All the fruits are grown without the use of any <br />
                 pesticides and other chemicals. </p>
                <button className='load-more-news' >
                    <Link to='/NewsandBlog5'> Load More  🡆 </Link>  </button>
            </div>
            <div className="blocks-news">
                <div className="profile-news">
                    <BsPersonFill /> <p className='rachi-news'>Alex Louis </p>
                </div>
                <h1 className='benefist-news'> Super Food You Should Eat Freshly </h1>
                <p className='p7-news'>No use of any chemicals you will end up with <br />
                fresh and organic vegetables. </p>
                <button className='load-more-news' >
                    <Link to='/NewsandBlog6'> Load More  🡆 </Link>  </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blocknews3
