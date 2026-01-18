import React from 'react';
import './sec7.css';
import { Link } from 'react-router-dom';
import leavnews from '../../../assets/leavs.png';
import tomatnews from '../../../assets/tomatoes.png';
import { BsPersonFill } from "react-icons/bs";

function Sec7() {
    return (
        <div className='sec7-parent'>
             <div className="news-header">
                    <div className="news-titles">
                        <h3 className='news-tag'>News</h3>
                        <h1 className='news-main-title'>
                            Discover weekly content about <br className="desktop-br" />
                            organic food, & more
                        </h1>
                    </div>
                    {/* <Link to='/News' className='more-news-btn'>More News 🡆</Link> */}
                </div>
            <div className="container sect7-content">
               

                <div className="news-grid">
                    <div className="news-card">
                        <div className="news-image-wrapper">
                            <img className='news-img' src={leavnews} alt="Leaves" />
                        </div>
                        <div className="news-info-block">
                            <span className='news-date'>25 Nov</span>
                            <div className="profile">
                                <BsPersonFill />
                                <span className='author-name'>By Rachi Card</span>
                            </div>
                            <h2 className='news-card-title'>The Benefits of Vitamin D</h2>
                            <p className='news-card-text'>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                            <Link to='/NewsandBlog3' className='read-more-btn'>Read More 🡆</Link>
                        </div>
                    </div>

                    <div className="news-card">
                        <div className="news-image-wrapper">
                            <img className='news-img' src={tomatnews} alt="Tomatoes" />
                        </div>
                        <div className="news-info-block">
                            <span className='news-date'>25 Nov</span>
                            <div className="profile">
                                <BsPersonFill />
                                <span className='author-name'>By Rachi Card</span>
                            </div>
                            <h2 className='news-card-title'>Our Favourite Summertime Tommeto</h2>
                            <p className='news-card-text'>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                            <Link to='/NewsandBlog4' className='read-more-btn'>Read More 🡆</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec7;
