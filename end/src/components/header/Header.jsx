import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Logo.png";
import { useState, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { CartContext } from "../../context/CartContext";

function Header() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { cartCount } = useContext(CartContext);

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/shop?search=${search}`);
    setSearch("");
  }

  return (
    <div className="parent">
      <div className="all">

        <div className="logos">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="logo-text">Organic</h1>
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
              Pages ▾
            </button>

            {isOpen && (
              <div className="dropdown-menu">
                <Link to="/team">Our Team</Link>
                <Link to="/single">Service-Single</Link>
                <Link to="/services">Services</Link>
              </div>
            )}
          </div>

          <Link to="/shop">Shop</Link>
          <Link to="/news"> News </Link>
          <Link to="/contacts">Contact</Link>
        </nav>

        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit"> <LuSearch/> </button>
        </form>

        <div className="actions">
          <div className="all-cout">
            <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="cart">
                <IoCartOutline className="cart-icon" />
              </div>
            </Link>

            <div className="count">Cart ({cartCount})</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
