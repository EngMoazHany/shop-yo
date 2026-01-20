import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>VOID</h2>
          <p>
            Wear your identity. <br />
            Premium streetwear crafted with purpose.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VOID</span>
          <span>All rights reserved</span>
        </div>

      </div>
    </footer>
  );
}
