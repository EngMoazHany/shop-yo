import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>R&Y SHOP MIRROR</h2>
          <p>
            Premium designer bags curated with elegance,
            craftsmanship, and authenticity.
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          {/* WhatsApp */}
          <a
            href="https://wa.me/201095170771"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.8-.1.1-.3.1-.5 0a6.7 6.7 0 0 1-2-1.3 7.5 7.5 0 0 1-1.4-1.8c-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.4.9 2.5c.1.2 1.6 2.5 3.9 3.5.5.2.9.4 1.2.5.5.2 1 .2 1.3.1.4-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} R&Y SHOP MIRROR — All rights reserved
        </div>

      </div>
      <div className="footer-credit">
  <p>
    Designed & Developed by <strong>Moaz Hany</strong>
  </p>
  <span>
     Software Engineer
  </span>
  <div className="credit-links">
    <a href="tel:01557992912">📞 01557992912</a>
    <a href="mailto:Moazhany27@gmail.com">✉️ Moazhany27@gmail.com</a>
  </div>
</div>

    </footer>
  );
  
}
