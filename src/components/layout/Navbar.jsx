import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/reading">Reading</Link>{" "}
      <Link to="/library">Library</Link>
    </nav>
  );
}

export default Navbar;