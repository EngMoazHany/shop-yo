import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="VOID Logo" />
        </Link>

        {/* Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Link to="/products" className="cta">
            Shop Now
          </Link>

          <Link to="/cart" className="cart-btn">
            Cart
          </Link>
        </div>

      </div>
    </header>
  );
}
