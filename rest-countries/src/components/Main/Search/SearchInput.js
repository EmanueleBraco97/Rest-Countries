import { useState, useContext } from "react";
import "./SearchInput.css";

import { DarkModeContext } from "../../../context/DarkModeContext";

const SearchInput = ({ onSearch }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={darkMode ? `input input-dark` : `input input-light`}
        type="text"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchInput;
