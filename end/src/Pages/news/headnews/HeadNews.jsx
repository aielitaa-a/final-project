import React from 'react'
import './headnews.css'
import headimg from '../../../assets/newsimg.png'

function HeadNews() {
  return (
    <div className='news'>
      <div className="newsimg">
        <img className='first-news' src={headimg} alt="" />
        <div className="news-text"> Recent  News </div>
      </div>
    </div>
  )
}

export default HeadNews
