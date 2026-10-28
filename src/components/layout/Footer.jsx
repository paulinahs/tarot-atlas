import "../styles/layout/Footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <h2 className="footer-logo">✨ Tarot Atlas</h2>

    <p className="footer-text">
      A modern space for tarot exploration, personal reflection,
      and mindful journaling.
    </p>

    <div className="footer-links">
      <a href="#">Discover</a>
      <a href="#">Readings</a>
      <a href="#">Journal</a>
      <a href="#">About</a>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Tarot Atlas. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}

export default Footer;