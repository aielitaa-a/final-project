import React from 'react'
import './blocknews3.css'
import girlnews from '../../../assets/girlnews.png'
import vegie from '../../../assets/vagnews.png'
import { BsPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

function Blocknews3() {
  return (
    <div className='blockNews3-container'>
      <div className="news-cards-wrapper">
        
        {/* Карточка 1 */}
        <div className="news-card-item">
          <div className="news-card-image">
            <img src={girlnews} alt="Work Process" />
            <div className="news-date-badge">25<br/>Nov</div>
          </div>
          <div className="news-card-content">
            <div className="profile-news">
              <BsPersonFill /> <p className='rachi-news'>By Rachi Card</p>
            </div>
            <h1 className='benefist-news'>Work Process of Organic Farming</h1>
            <p className='p7-news'>All the fruits are grown without the use of any pesticides and other chemicals.</p>
            <Link to='/NewsandBlog5' className='read-more-link'>Read More 🡆</Link>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="news-card-item">
          <div className="news-card-image">
            <img src={vegie} alt="Super Food" />
            <div className="news-date-badge">25<br/>Nov</div>
          </div>
          <div className="news-card-content">
            <div className="profile-news">
              <BsPersonFill /> <p className='rachi-news'>Alex Louis</p>
            </div>
            <h1 className='benefist-news'>Super Food You Should Eat Freshly</h1>
            <p className='p7-news'>No use of any chemicals you will end up with fresh and organic vegetables.</p>
            <Link to='/NewsandBlog6' className='read-more-link'>Read More 🡆</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blocknews3