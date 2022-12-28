import "./Countries.css";
// import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  async function getCountries() {
    try {
      const response = await fetch(`${url}`);

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

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <section className="country-container">
      <div className="country-top"></div>

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
