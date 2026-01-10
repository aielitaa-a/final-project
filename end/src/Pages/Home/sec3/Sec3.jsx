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
  const { addToCart } = useContext(CartContext);

  async function Product() {
    try {
      const result = await axios.get(myData);
      setPro(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Product();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowReview(true);
  };

  const closeReview = () => {
    setShowReview(false);
    setSelectedProduct(null);
  };

  return (
    <div className='sec3'>

      {showReview && selectedProduct && (
        <div className="review-modal-overlay" onClick={closeReview}>
          <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeReview}>
              ×
            </button>
            <div className="modal-product-info">
              <img 
                className="modal-product-image" 
                src={selectedProduct.name} 
                alt={selectedProduct.avatar} 
              />
              <div className="modal-product-details">
                <p className="modal-category">{selectedProduct.avatar}</p>
                <h3 className="modal-name">{selectedProduct.price}</h3>
                <h3 className="modal-price">{selectedProduct.category}</h3>
                <div className="modal-star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                </div>
              </div>
            </div>
            <div className="modal-review-section">
              <h4>About product:</h4>
              <p className="review-text">{selectedProduct.description}</p>
            </div>
            <div className="modal-actions">
              <button 
                className="modal-add-to-cart"
                onClick={() => {
                  addToCart(selectedProduct);
                  closeReview();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="sect3">
        <h2>Categories</h2>
        <h1>Our Products</h1>

        <div className="backened">
          {pro.map((el) => {
            return (
              <div className="card" key={el.id} style={{ position: 'relative' }}>
                <button 
                  className="add-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(el);
                  }}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'white',
                    borderRadius: '50%',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer',
                    zIndex: 5
                  }}
                >
                  <IoCartOutline />
                </button>

                <div 
                  className="product-link"
                  onClick={() => handleProductClick(el)}
                  style={{ cursor: 'pointer' }}
                >
                  <img className='ava' src={el.name} alt={el.avatar ?? 'product'} />
                </div>

                <div 
                  className="product-info"
                  onClick={() => handleProductClick(el)}
                  style={{ cursor: 'pointer' }}
                >
                  <p className='category'>{el.avatar}</p>
                  <h3 className='name'>{el.price}</h3>
                  <h3 className='price'>{el.category}</h3>
                </div>

                <div className="star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                </div>

              </div>
            )
          })}
        </div>
        <button className='load-more'>
          <a href='/shop'>Load More 🡆</a>
        </button>
      </div>
    </div>
  )
}

export default Sec3;