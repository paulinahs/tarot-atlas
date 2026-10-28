import { Link } from "react-router-dom";
import "../../styles/layout/Footer.css";



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
  <Link to="/readings">Readings</Link>
  <Link to="/journal">Journal</Link>
  <Link to="/about">About</Link>
</div>
    

    <div className="footer-bottom">
      <p>© 2026 Tarot Atlas. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}

export default Footer;