import { Link } from "react-router-dom";
import "../styles/layout/Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
  ✨ Tarot Atlas
</Link>

      <ul className="navbar-links">
        <li>
          <Link to="/readings">Readings</Link>
        </li>

        <li>
          <Link to="/journal">Journal</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <button className="login-btn">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;