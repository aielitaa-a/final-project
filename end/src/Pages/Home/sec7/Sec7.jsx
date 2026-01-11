import React from 'react';
import './sec7.css';
import { Link } from 'react-router-dom';
import leavnews from '../../../assets/leavs.png';
import tomatnews from '../../../assets/tomatoes.png';
import { BsPersonFill } from "react-icons/bs";

function Sec7() {
    return (
        <div className='sec7-parent'>
            <div className="container sect7-content">
                {/* Верхняя часть: Заголовки и кнопка */}
                <div className="news-header">
                    <div className="news-titles">
                        <h3 className='news-tag'>News</h3>
                        <h1 className='news-main-title'>
                            Discover weekly content about <br className="desktop-br" />
                            organic food, & more
                        </h1>
                    </div>
                    <button className='more-news-btn'>
                        <Link to='/News'>More News 🡆</Link>
                    </button>
                </div>

                {/* Сетка новостей */}
                <div className="news-grid">
                    {/* Карточка 1 */}
                    <div className="news-card">
                        <div className="news-image-wrapper">
                            <img className='news-img' src={leavnews} alt="Leaves" />
                        </div>
                        <div className="news-info-block">
                            <div className="profile">
                                <BsPersonFill /> 
                                <span className='author-name'>By Rachi Card</span>
                            </div>
                            <h2 className='news-card-title'>Everything You Need to Know Organik</h2>
                            <p className='news-card-text'>
                                Organic farming is the only way that you still experience the real world.
                            </p>
                            <button className='load-more-btn'>
                                <Link to='/NewsandBlog3'>Load More 🡆</Link>
                            </button>
                        </div>
                    </div>

                    {/* Карточка 2 */}
                    <div className="news-card">
                        <div className="news-image-wrapper">
                            <img className='news-img' src={tomatnews} alt="Tomatoes" />
                        </div>
                        <div className="news-info-block">
                            <div className="profile">
                                <BsPersonFill /> 
                                <span className='author-name'>By Rachi Card</span>
                            </div>
                            <h2 className='news-card-title'>Organic: Surprising Benefits Facts</h2>
                            <p className='news-card-text'>
                                The world of nature has grown on the principles of health, ecology, and care.
                            </p>
                            <button className='load-more-btn'>
                                <Link to='/NewsandBlog4'>Load More 🡆</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sec7;