import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "../../utils/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <nav className={darkMode ? `nav-dark` : `nav-light`} id="nav">
      <div className="nav-left">
        <h3 className={darkMode ? `h3-dark` : `h3-light`}>
          Where in the world?
        </h3>
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
