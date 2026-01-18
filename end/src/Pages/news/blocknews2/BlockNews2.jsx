import React from 'react'
import './blocknews2.css'
import leavnews from '../../../assets/leavs.png'
import tomatnews from '../../../assets/tomatoes.png'
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BlockNews2() {
  return (
    <div className='blockNews2-container'>
      <div className="news-cards-wrapper">
        
        {/* Карточка 1 */}
        <div className="news-card-item">
          <div className="news-card-image">
            <img src={leavnews} alt="Leaves" />
            <div className="news-date-badge">25<br/>Nov</div>
          </div>
          <div className="news-card-content">
            <div className="profile-news">
              <BsPersonFill /> <p className='rachi-news'>By Rachi Card</p>
            </div>
            <h1 className='benefist-news'>Everything You Need to Know Organik</h1>
            <p className='p7-news'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <Link to='/NewsandBlog3' className='read-more-link'>Read More 🡆</Link>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="news-card-item">
          <div className="news-card-image">
            <img src={tomatnews} alt="Tomatoes" />
            <div className="news-date-badge">25<br/>Nov</div>
          </div>
          <div className="news-card-content">
            <div className="profile-news">
              <BsPersonFill /> <p className='rachi-news'>Alex Louis</p>
            </div>
            <h1 className='benefist-news'>Organic Fruits: Surprising Benefits Facts</h1>
            <p className='p7-news'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            <Link to="/NewsandBlog4" className='read-more-link'>Read More 🡆</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlockNews2