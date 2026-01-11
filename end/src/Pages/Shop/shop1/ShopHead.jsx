import React, { useEffect, useState, useContext } from "react";
import "./shophead.css";
import axios from "axios";
import shopimg from "../../../assets/shopimg.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "../../../context/CartContext";
import { Link, useSearchParams } from "react-router-dom";
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
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const filtered = shop.filter((el) =>
    el.price?.toLowerCase().includes(searchQuery)
  );

  const productsToShow = searchQuery ? filtered : shop;

  return (
    <div className="shop1">
      
      {/* модалка */}
      {notification && (
       <div style={{
        position: 'fixed',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#44ca44', 
        color: 'white',
        padding: '25px 35px',
        borderRadius: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        zIndex: 9999,
        fontSize: '22px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span> Product added to cart</span>
      </div>
      )}

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
                <h3 className="modal-price">{selectedProduct.categoty}</h3>
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
              <h4>about product:</h4>
              <p className="review-text">{selectedProduct.otzyv}</p>
            </div>
            <div className="modal-actions">
              <button 
                className="modal-add-to-cart"
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  closeReview();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="shopp">
        <img className="shop-img" src={shopimg} alt="" />
        <h1 className="shop-text">
          {searchQuery ? `"${searchQuery}"` : "SHOP"}
        </h1>

        <div className="backened">
          {productsToShow.map((el) => {
            return (
              <div className="card" key={el.id} style={{ position: "relative" }}>
                <button
                  className="add-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(el); 
                  }}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    zIndex: 5,
                    background: "white",
                    borderRadius: "50%",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  <IoCartOutline />
                </button>

                <div 
                  className="product-link" 
                  onClick={() => handleProductClick(el)}
                  style={{ cursor: "pointer" }}
                >
                  <img className="ava" src={el.name} alt={el.avatar} />
                </div>

                <div 
                  className="product-info" 
                  onClick={() => handleProductClick(el)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="category">{el.avatar}</p>
                  <h3 className="name">{el.price}</h3>
                  <h3 className="price">{el.categoty}</h3>
                </div>

                <div className="star">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopHead;