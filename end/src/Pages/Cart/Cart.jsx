import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css"; 

function formatCurrency(n) {
  if (isNaN(n)) return "$0.00";
  return `$${Number(n).toFixed(2)}`;
}

function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart-page" style={{ padding: 20 }}>

      {cart.length === 0 ? (
        <p style={{color: "red", fontSize: 20}}>Your cart is empty :( </p>
      ) : (
        <>
          <div className="cart-items" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cart.map((item, idx) => (
              <div key={idx} className="cart-item" style={{ display: "flex", alignItems: "center", gap: 16, borderBottom: "1px solid #eee", paddingBottom: 12 }}>
                <img src={item.image} alt={item.title} style={{ width: 100, height: 120, objectFit: "cover", borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize:30, color:"green" }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize:25, color:"gray", paddingLeft:5, paddingTop:10 }}>{formatCurrency(item.price)}</p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(idx)} style={{ padding: "8px 12px", cursor: "pointer" ,backgroundColor: "red",width:100,height:50,border: "none",
                    borderRadius:10,color: "white" ,fontFamily: "Roboto", fontSize:20 }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary" style={{ marginTop: 20, textAlign: "right" }}>
            <h2>Total: {formatCurrency(total)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
