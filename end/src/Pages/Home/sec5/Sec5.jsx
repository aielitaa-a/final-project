import React, { useEffect, useState, useContext } from "react";
import "./sec5.css";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; 

let myApi = "https://691a97132d8d7855756f5160.mockapi.io/month";

function Sec5() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();    

  async function loadProducts() {
    try {
      const result = await axios.get(myApi);
      setProducts(result.data);
    } catch (error) {
      console.log("Ошибка загрузки:", error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="sec5">
      <h2 className="sec5-title">Monthly Products</h2>

      <div className="sec5-items">
        {products.map((el) => (
          <div className="sec5-card" key={el.id}>

            <img
              className="sec5-img"
              src={el.avatar}
              alt={el.name}
              onClick={() => navigate(`/products/${el.id}`)}   
            />

            <h3 className="sec5-name">{el.name}</h3>
            <p className="sec5-price">${el.price}</p>

            <button className="sec5-btn" onClick={() => addToCart(el)}>
              Add to Cart
            </button>

            <Link to={`/products/${el.id}`} className="sec5-more">
              View Details
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Sec5;
