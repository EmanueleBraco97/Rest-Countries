import "./Countries.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { url } from "../../../utils/api";
import { Link } from "react-router-dom";
import SearchInput from "../Search/SearchInput";
import { DarkModeContext } from "../../../context/DarkModeContext";
import FilterRegion from "../FilterRegion/FilterRegion";

const Countries = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function getCountries() {
    axios
      .get(`${url}/all`)
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  }

  const getCountryName = async (countryName) => {
    try {
      const response = await fetch(`${url}/name/${countryName}`);
      if (response.ok) {
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    axios
      .get(`${url}/region/${regionName}`)
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <section className="country-container">
      <div className="country-top">
        <div className="search">
          <SearchInput onSearch={getCountryName} />
        </div>

        <div className="filter-region">
          <FilterRegion onSelect={getCountryByRegion} />
        </div>
      </div>

      <div className="country-bottom">
        {isLoading && isError && <h1>Loading...</h1>}
        {isError && !isLoading && <h2>{isError}</h2>}

        {countries.map((country, index) => (
          <Link key={index} to={`/country/${country.name.common}`}>
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
