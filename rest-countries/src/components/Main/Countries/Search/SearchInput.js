import { useState, useContext, useEffect } from "react";
import "./SearchInput.css";

import { DarkModeContext } from "../../../../context/DarkModeContext";

const SearchInput = ({ onSearch }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [input, setInput] = useState("");

  const [debouncedTerm, setDebouncedTerm] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => setInput(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (input !== "") {
      submitHandler(input);
    }
  }, [input]);

  const submitHandler = (e) => {
    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={darkMode ? `input input-dark` : `input input-light`}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setDebouncedTerm(e.target.value)}
        value={debouncedTerm}
      ></input>
    </form>
  );
};

export default SearchInput;
