import "./Countries.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import SearchInput from "../Search/SearchInput";

const url = "https://restcountries.com/v3.1";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  async function getCountries() {
    try {
      const response = await fetch(`${url}/all`);

      if (!response.ok) throw new Error("There is an Error");

      const data = await response.json();
      console.log(data);

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error.message);
    }
  }

  const getCountryName = async (countryName) => {
    try {
      const response = await fetch(`${url}/name/${countryName}`);
      if (!response.ok) throw new Error("Not fount any country");
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
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
      </div>

      <div className="country-bottom">
        {isLoading && isError && <h1>Loading...</h1>}
        {isError && !isLoading && <h2>{isError}</h2>}

        {countries.map((country) => (
          <div className="country-card">
            <div className="img-country">
              <img src={country.flags.png} alt=""></img>
            </div>

            <div className="country-data">
              <h3>{country.name.common}</h3>
              <h5>Population: {country.population}</h5>
              <h5>Region: {country.region} </h5>
              <h5>Capital: {country.capital} </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
