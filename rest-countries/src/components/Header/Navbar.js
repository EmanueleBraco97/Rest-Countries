import "./Navbar.css";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="nav-left">
        <h1>Where in the world?</h1>
      </div>

      <div className="nav-right">
        <FaMoon />
        <button className="button-mode">Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
