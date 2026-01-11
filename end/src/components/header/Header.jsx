import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/Logo.png";
import { useState, useContext, useEffect } from "react";
import { IoCartOutline, IoPersonOutline, IoMenu, IoClose } from "react-icons/io5"; 
import { LuSearch } from "react-icons/lu"; 
import { CartContext } from "../../context/CartContext";

function Header() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setUser(null); 
    navigate('/');
  };

  function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/shop?search=${search}`);
    setSearch("");
  }

  // Функция для закрытия меню при клике на ссылку
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPagesOpen(false);
  };

  return (
    <header className="header-parent">
      <div className="container header-container">
        
        {/* Логотип */}
        <Link to="/" className="logos">
          <img className="logo-img" src={logo} alt="logo" />
          <h1 className="logo-text">Organic</h1>
        </Link>

        {/* Кнопка Бургера для мобильных устройств */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Навигация */}
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>

          <div className="dropdown">
            <button className="dropdown-btn" onClick={() => setIsPagesOpen(!isPagesOpen)}>
              Pages ▾
            </button>
            {isPagesOpen && (
              <div className="dropdown-menu">
                <Link to="/team" onClick={closeMenu}>Our Team</Link>
                <Link to="/services" onClick={closeMenu}>Services</Link>
                <Link to="/single" onClick={closeMenu}>Shop Single</Link>
              </div>
            )}
          </div>

          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/news" onClick={closeMenu}>News</Link>
          <Link to="/contacts" onClick={closeMenu}>Contact</Link>
        </nav>

        {/* Правая часть (Поиск, Корзина, Юзер) */}
        <div className="header-actions">
          <form className="action-item-wrapper search-wrapper" onSubmit={handleSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="icon-bg green-bg search-btn">
              <LuSearch />
            </button>
          </form>

          <Link to="/cart" className="action-item-wrapper cart-wrapper" onClick={closeMenu}>
            <div className="icon-bg navy-bg">
              <IoCartOutline />
            </div>
            <span className="action-text">Cart ({cartCount})</span>
          </Link>

          {user ? (
            <div className="action-item-wrapper login-wrapper" onClick={handleLogout} style={{cursor: 'pointer'}}>
              <div className="icon-bg green-bg">
                <IoPersonOutline />
              </div>
              <span className="action-text">Logout ({user.name.split(' ')[0]})</span>
            </div>
          ) : (
            <Link to="/register" className="action-item-wrapper login-wrapper" onClick={closeMenu}>
              <div className="icon-bg green-bg">
                <IoPersonOutline />
              </div>
              <span className="action-text">Login</span>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;