import { Route, Routes } from "react-router-dom";
import Countries from "./Countries/Countries";
import Country from "./Country/Country";
import "./Main.css";

import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Main = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <main className={darkMode ? `container-dark` : `container-light`}>
      <Routes>
        <Route index element={<Countries />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </main>
  );
};

export default Main;
