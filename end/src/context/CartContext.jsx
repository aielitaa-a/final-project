import { createContext, useState, useEffect } from "react"; 

export const CartContext = createContext();

function parsePrice(value) {
  if (value == null) return 0;
  const s = String(value);
  const match = s.replace(",", ".").match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("my_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const normalized = {
      id: product.id ?? product._id ?? Math.random().toString(36).slice(2, 9),
      image: product.name ?? product.image ?? product.img ?? "",
      title: product.avatar ?? product.title ?? product.nameText ?? "Product",
      price: parsePrice(product.category ?? product.price ?? product.categoty),
      raw: product,
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