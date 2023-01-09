import "./Countries.css";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../utils/DarkModeContext";
import { FaSearch } from "react-icons/fa";

const Countries = ({ countries }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [input, setInput] = useState("");
  const [displayData, setDisplayData] = useState(countries);
  const [select, setSelect] = useState("");

  // const getCountryByRegion = async (regionName) => {
  //   axios
  //     .get(`${url}/region/${regionName}`)
  //     .then((response) => {
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setIsError(error.message);
  //     });
  // };

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const selectHandler = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  useEffect(() => {
    if (!select.includes("Filter")) {
      let regionName = countries.filter((item) => {
        return item.region.toLowerCase().match(select.toLowerCase());
      });
      setDisplayData(regionName);
    } else {
      setDisplayData(countries);
    }
  }, [select, countries]);

  useEffect(() => {
    if (input.length > 3) {
      let newCountries = countries.filter((item) => {
        return item.name.common.toLowerCase().match(input.toLowerCase());
      });
      setDisplayData(newCountries);
    } else {
      setDisplayData(countries);
    }
  }, [input, countries]);

  return (
    <section className="country-container">
      <div className="country-top">
        <div className="search">
          <form className={darkMode ? `form form-dark` : `form form-light`}>
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
              onChange={inputHandler}
              value={input}
            ></input>
          </form>
        </div>

        <div className="filter-region">
          <select
            onChange={selectHandler}
            className={darkMode ? `select select-dark` : `select select-light`}
          >
            <option>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      <div className="country-bottom">
        {displayData.map((country, index) => (
          <Link key={index} to={`/${country.name.common}`}>
            <div
              className={
                darkMode
                  ? `country-card country-card-dark`
                  : `country-card country-card-light`
              }
            >
              <div className="img-country">
                <img src={country.flags.png} alt=""></img>
              </div>

              <div className="country-data">
                <h3>{country.name.common}</h3>
                <h5>
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h5>
                <h5>Region: {country.region} </h5>
                <h5>Capital: {country.capital} </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Countries;
