import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import "./search.css";

const apiShop = "https://692db5b8e5f67cd80a4ca7f3.mockapi.io/shop";
const apiMonth = "https://691a97132d8d7855756f5160.mockapi.io/month";

function SearchPage() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const query = searchParams.get("query")?.toLowerCase() || "";
  const { addToCart } = useContext(CartContext);

  async function loadAll() {
    try {
      setIsLoading(true);
      const [shopResponse, monthResponse] = await Promise.all([
        axios.get(apiShop),
        axios.get(apiMonth)
      ]);

      const normalizedShopData = shopResponse.data.map(item => ({
        ...item,
        searchName: item.price?.toString().toLowerCase() || "", 
        searchCategory: (item.categoty || "").toLowerCase(),
        displayName: item.price || "No Name",
        displayCategory: item.categoty || "",
        displayPrice: item.name || "0",
        imageSrc: item.name || "",
        apiType: "shop"
      }));

      const normalizedMonthData = monthResponse.data.map(item => ({
        ...item,
        searchName: item.price?.toString().toLowerCase() || "",
        searchCategory: (item.category || "").toLowerCase(),
        displayName: item.price || "No Name",
        displayCategory: item.category || "",
        displayPrice: item.avatar || "0",
        imageSrc: item.name || "",
        apiType: "month"
      }));

      setData([...normalizedShopData, ...normalizedMonthData]);
    } catch (e) {
      console.log("Error loading data:", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);


  const filtered = query.trim() === "" 
    ? data 
    : data.filter((item) => {
        return (
          item.searchName.includes(query) ||
          item.searchCategory.includes(query)
        );
      });

  const hasSearchQuery = query.trim() !== "";
  const noResultsFound = hasSearchQuery && filtered.length === 0;

  return (
    <div className="search-page">
      <h1>
        {hasSearchQuery ? `Search results for: "${query}"` : "All Products"}
      </h1>

      {isLoading ? (
        <div className="loading">
          <p>Loading products...</p>
        </div>
      ) : noResultsFound ? (
        /* БЛОК: НИЧЕГО НЕ НАЙДЕНО */
        <div className="product-not-found">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" 
            alt="Not found" 
            style={{ width: '150px', marginBottom: '20px' }} 
          />
          <h2>Product Not Found</h2>
          <p>We couldn't find any results for "<strong>{query}</strong>".</p>
          <p>Please check the spelling or try another keyword.</p>
          <Link to="/" className="back-btn">Back to Home</Link>
        </div>
      ) : (
        <div className="results">
          {filtered.map((el) => (
            <div className="card" key={`${el.apiType}-${el.id}`}>
              <button className="add-btn" onClick={() => addToCart(el)}>
                <IoCartOutline />
              </button>

              <Link to={`/products/${el.id}?api=${el.apiType}`}>
                <img 
                  src={el.imageSrc || "https://via.placeholder.com/150"} 
                  alt={el.displayName} 
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </Link>

              <h3>{el.displayName}</h3>
              <p>{el.displayCategory}</p>
              <strong>${el.displayPrice}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;