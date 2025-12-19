import React from 'react'
import './news.css'
import HeadNews from './headnews/HeadNews'
import BlockNews2 from './blocknews2/BlockNews2'
import Blocknews3 from './blocknews3/Blocknews3'
import NewsFoot from './newsfoot/NewsFoot'

function News() {
  return (
    <div>
      <HeadNews/>
      <BlockNews2/>
      <Blocknews3/>
      <NewsFoot/>
    </div>
  )
}

export default News
