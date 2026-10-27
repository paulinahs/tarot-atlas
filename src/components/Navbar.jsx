import { Link } from "react-router-dom";
import "./layout/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ✨ Tarot Atlas
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Discover</Link>
        </li>

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