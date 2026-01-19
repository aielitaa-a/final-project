import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './sec3.css';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from '../../../context/CartContext';
import { IoCartOutline } from "react-icons/io5";

let myData = 'https://691a97132d8d7855756f5160.mockapi.io/month';

function Sec3() {
  const [pro, setPro] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [notification, setNotification] = useState(false);
  
  const { addToCart } = useContext(CartContext);

  async function loadProducts() {
    try {
      const result = await axios.get(myData);
      setPro(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowReview(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  return (
    <div className='sec3-wrapper'>
      
      {notification && (
        <div className="cart-notification">
          <span>Product added to cart</span>
        </div>
      )}

      {showReview && selectedProduct && (
        <div className="review-modal-overlay" onClick={() => setShowReview(false)}>
          <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowReview(false)}>×</button>
            <div className="modal-inner">
              <div className="modal-left">
                <img src={selectedProduct.name} alt="" className="modal-main-img" />
              </div>
              <div className="modal-right">
                <p className="modal-cat-label">{selectedProduct.avatar}</p>
                <h2 className="modal-product-title">{selectedProduct.price}</h2>
                <div className="modal-price-stars">
                  <span className="current-modal-price">{selectedProduct.category}</span>
                  <div className="modal-stars-list">
                    {[...Array(5)].map((_, i) => <MdOutlineStarPurple500 key={i} />)}
                  </div>
                </div>
                <div className="modal-description-block">
                  <h4 className="desc-heading">Description:</h4>
                  <p className="desc-text">{selectedProduct.description}</p>
                </div>
                <button className="modal-add-btn" onClick={() => { handleAddToCart(selectedProduct); setShowReview(false); }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="sec3-container">
        <div className="sec3-titles">
          <h2 className="sub-title">Categories</h2>
          <h1 className="main-title">Our Products</h1>
        </div>

        <div className="products-grid">
          {pro.map((el) => (
            <div className="product-card" key={el.id}>
              <span className="product-tag">{el.avatar}</span>
              <button className="quick-add" onClick={() => handleAddToCart(el)}>
                <IoCartOutline />
              </button>
              <div className="product-main" onClick={() => handleProductClick(el)}>
                <img src={el.name} alt={el.avatar} className="product-image" />
                <h3 className="product-title">{el.price}</h3>
                <div className="product-footer">
                  <span className="price-text">{el.category}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <MdOutlineStarPurple500 key={i} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className='load-more-btn'>
          <a href='/shop'>Load More 🡆</a>
        </button>
      </div>
    </div>
  );
}

export default Sec3;