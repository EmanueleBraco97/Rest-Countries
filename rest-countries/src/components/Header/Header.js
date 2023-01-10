import Navbar from "./Navbar";
import "./Header.css";
import { DarkModeContext } from "../../utils/DarkModeContext";
import { useContext } from "react";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <header className={darkMode ? `header header-dark` : `header header-light`}>
      <Navbar />
    </header>
  );
};

export default Header;
