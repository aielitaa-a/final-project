import React, { useEffect, useState, useContext } from "react";
import "./shophead.css";
import axios from "axios";
import shopimg from "../../../assets/shopimg.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";
import { useSearchParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

let myShop = "https://692db5b8e5f67cd80a4ca7f3.mockapi.io/shop";

function ShopHead() {
  const [shop, setShop] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [notification, setNotification] = useState(false);
  
  const { addToCart } = useContext(CartContext);
  const [params] = useSearchParams();
  const searchQuery = params.get("search")?.toLowerCase() || "";

  async function loadProducts() {
    try {
      const result = await axios.get(myShop);
      setShop(result.data);
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

  const closeReview = () => {
    setShowReview(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(true);
    setTimeout(() => setNotification(false), 2000);
  };

  const productsToShow = searchQuery 
    ? shop.filter((el) => el.price?.toLowerCase().includes(searchQuery)) 
    : shop;

  return (
    <div className="shop-page">
      {notification && (
        <div className="cart-notification">
          <span>Product added to cart</span>
        </div>
      )}

      {showReview && selectedProduct && (
        <div className="review-modal-overlay" onClick={closeReview}>
          <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeReview}>×</button>
            
            <div className="modal-inner">
              <div className="modal-left">
                <img src={selectedProduct.name} alt="" className="modal-main-img" />
              </div>
              
              <div className="modal-right">
                <p className="modal-cat-label">{selectedProduct.avatar}</p>
                <h2 className="modal-product-title">{selectedProduct.price}</h2>
                
                <div className="modal-price-stars">
                  <span className="current-modal-price">{selectedProduct.categoty}</span>
                  <div className="modal-stars-list">
                    {[...Array(5)].map((_, i) => <MdOutlineStarPurple500 key={i} />)}
                  </div>
                </div>

                <div className="modal-description-block">
                  <h4 className="desc-heading">Description:</h4>
                  <p className="desc-text">{selectedProduct.otzyv}</p>
                </div>

                <button className="modal-add-btn" onClick={() => { handleAddToCart(selectedProduct); closeReview(); }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="shop-banner">
        <img src={shopimg} alt="banner" className="banner-bg" />
        <h1 className="banner-title">{searchQuery ? `"${searchQuery}"` : "SHOP"}</h1>
      </div>

      <div className="shop-container">
        <div className="products-grid">
          {productsToShow.map((el) => (
            <div className="product-card" key={el.id}>
              <span className="product-tag">{el.avatar}</span>
              <button className="quick-add" onClick={() => handleAddToCart(el)}>
                <IoCartOutline />
              </button>
              <div className="product-main" onClick={() => handleProductClick(el)}>
                <img src={el.name} alt={el.avatar} className="product-image" />
                <h3 className="product-title">{el.price}</h3>
                <div className="product-footer">
                  <span className="price-text">{el.categoty}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <MdOutlineStarPurple500 key={i} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopHead;