// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

function parsePrice(value) {
  if (value == null) return 0;
  // value может быть "$12" или "12" или 12
  const s = String(value);
  const match = s.replace(",", ".").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // получает "сырой" продукт из API и нормализует поля
  function addToCart(product) {
    const normalized = {
      id: product.id ?? product._id ?? Math.random().toString(36).slice(2,9),
      image: product.name ?? product.image ?? product.img ?? "",
      title: product.avatar ?? product.title ?? product.nameText ?? "Product",
      // price может быть в поле price или categoty / category; парсим числа
      price: parsePrice(product.categoty ?? product.category ?? product.price),
      raw: product, // сохраняем для полной информации при необходимости
    };

    setCart(prev => [...prev, normalized]);
  }

  function removeFromCart(index) {
    setCart(prev => prev.filter((_, i) => i !== index));
  }

  const cartCount = cart.length;

  const total = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount, total }}>
      {children}
    </CartContext.Provider>
  );
}
