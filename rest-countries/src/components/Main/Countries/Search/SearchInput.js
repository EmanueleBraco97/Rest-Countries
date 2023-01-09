import { useState, useContext, useEffect } from "react";
import "./SearchInput.css";

import { DarkModeContext } from "../../../../context/DarkModeContext";

import { FaSearch } from "react-icons/fa";

const SearchInput = ({ onSearch }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [input, setInput] = useState("");

  const [debouncedInput, setDebouncedInput] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => setInput(debouncedInput), 1000);
    return () => clearTimeout(timer);
  }, [debouncedInput]);

  useEffect(() => {
    if (input !== "") {
      submitHandler(input);
    }
  }, [input]);

  const submitHandler = (e) => {
    onSearch(input);
  };

  return (
    <form
      className={darkMode ? `form form-dark` : `form form-light`}
      onSubmit={submitHandler}
    >
      <div
        className={
          darkMode
            ? `icon-search icon-search-dark`
            : `icon-search icon-search-light`
        }
      >
        <FaSearch />
      </div>
      <input
        className={darkMode ? `input input-dark` : `input input-light`}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setDebouncedInput(e.target.value)}
        value={debouncedInput}
      ></input>
    </form>
  );
};

export default SearchInput;
