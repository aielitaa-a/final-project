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
      const [shop, month] = await Promise.all([
        axios.get(apiShop),
        axios.get(apiMonth)
      ]);

      setData([...shop.data, ...month.data]); 
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  const filtered = data.filter((item) =>
    item.name?.toLowerCase().includes(query) ||
    item.category?.toLowerCase().includes(query) ||
    item.avatar?.toLowerCase().includes(query)
  );

  // Проверяем, есть ли результаты поиска
  const hasResults = filtered.length > 0;
  const hasSearchQuery = query.trim() !== "";
  
  // Показываем сообщение только если:
  // 1. Данные загружены (не загружаются)
  // 2. Был выполнен поиск (есть query)
  // 3. Результатов нет
  const shouldShowNoResults = !isLoading && hasSearchQuery && !hasResults;

  return (
    <div className="search-page">
      <h1>
        {hasSearchQuery ? `Search results for: "${query}"` : "Search Products"}
      </h1>

      {isLoading ? (
        <div className="loading">
          <p>Loading products...</p>
        </div>
      ) : shouldShowNoResults ? (
        // Показываем сообщение, если товары не найдены
        <div className="no-results">
          <h2>Товар не найден</h2>
          <p>К сожалению, по вашему запросу "{query}" ничего не найдено.</p>
          <p>Попробуйте изменить поисковый запрос или посмотреть другие товары:</p>
          <Link to="/products" className="back-to-products">
            Вернуться к товарам
          </Link>
        </div>
      ) : !hasSearchQuery ? (
        // Показываем все товары, если поискового запроса нет
        <div className="results">
          {data.map((el) => (
            <div className="card" key={el.id}>
              <button className="add-btn" onClick={() => addToCart(el)}>
                <IoCartOutline />
              </button>

              <Link to={`/products/${el.id}`}>
                <img src={el.name || el.avatar} alt="" />
              </Link>

              <h3>{el.name}</h3>
              <p>{el.category || el.avatar}</p>
              <strong>${el.price}</strong>
            </div>
          ))}
        </div>
      ) : (
        // Показываем результаты, если они есть
        <div className="results">
          {filtered.map((el) => (
            <div className="card" key={el.id}>
              <button className="add-btn" onClick={() => addToCart(el)}>
                <IoCartOutline />
              </button>

              <Link to={`/products/${el.id}`}>
                <img src={el.name || el.avatar} alt="" />
              </Link>

              <h3>{el.name}</h3>
              <p>{el.category || el.avatar}</p>
              <strong>${el.price}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;