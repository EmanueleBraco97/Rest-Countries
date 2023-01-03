import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div>
      <button className="button-no-match">
        <FaArrowLeft />
        <Link to="/">Returns to the main Countries Page</Link>
      </button>
      <h1>Page not Found...Error 404</h1>
    </div>
  );
};

export default NoMatch;
