import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <nav className={darkMode ? `nav-dark` : `nav-light`} id="nav">
      <div className="nav-left">
        <h1>Where in the world?</h1>
      </div>

      <div className="nav-right">
        <FaMoon />
        <button onClick={handleClick} className="button-mode">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
