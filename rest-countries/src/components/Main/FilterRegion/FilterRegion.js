import "./FilterRegion.css";
import { useContext } from "react";

import { DarkModeContext } from "../../../context/DarkModeContext";

const FilterRegion = ({ onSelect }) => {
  const { darkMode } = useContext(DarkModeContext);

  const selectHandler = (e) => {
    const regionName = e.target.value;

    onSelect(regionName);
  };

  return (
    <select
      className={darkMode ? `select select-dark` : `select select-light`}
      onChange={selectHandler}
    >
      <option>Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterRegion;
