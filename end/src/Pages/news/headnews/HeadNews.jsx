import React from 'react'
import './headnews.css'
import headimg from '../../../assets/newsimg.png'

function HeadNews() {
  return (
    <div className='news-container'>
      <div className="news-banner">
        <img className='news-banner-img' src={headimg} alt="Recent News Banner" />
        <div className="news-overlay">
          <h1 className="news-title">Recent News</h1>
        </div>
      </div>
    </div>
  )
}

export default HeadNews