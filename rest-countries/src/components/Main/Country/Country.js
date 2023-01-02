import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { url } from "../../../utils/api";

import "./Country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryName = async () => {
      try {
        const response = await fetch(`${url}/name/${countryName}`);
        if (!response.ok) throw new Error("There is An Error");

        const data = await response.json();
        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getCountryName();
  }, [countryName]);

  return (
    <section className="info-country-principal">
      <button className="button-back">
        <FaArrowLeft />
        <Link to="/">Back</Link>
      </button>

      {isLoading && !isError && <h1>Loading...</h1>}

      {isError && !isLoading && <h1>{isError}</h1>}

      {country?.map((country, index) => (
        <section className="country-info-container" key={index}>
          <div className="country-info-img">
            <img src={country.flags.png} alt="flags"></img>
          </div>

          <div className="country-info">
            <div className="country-info-left">
              <h1>{country.name.common}</h1>
              <div className="data-country">
                <h5>Native Name:</h5>
                <span>{country.name.common}</span>
              </div>
              <div className="data-country">
                <h5>Population:</h5>
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </div>
              <div className="data-country">
                <h5>Region: </h5>
                <span>{country.region}</span>
              </div>
              <div className="data-country">
                <h5>Sub Region: </h5>
                <span>{country.subregion}</span>
              </div>
              <div className="data-country">
                <h5>Capital:</h5>
                <span>{country.capital}</span>
              </div>
            </div>

            <div className="country-info-right">
              <div className="data-country">
                <h5>Top Level Domain:</h5>
                <span>{country.tld}</span>
              </div>
              <div className="data-country">
                <h5>Currencies: {""}</h5>
                {Object.entries(country.currencies).map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>{item[1].name}</li>
                    </ul>
                  );
                })}
              </div>
              <div className="data-country">
                <h5>Languages: </h5>
                <span className="languages">
                  {Object.values(country.languages)}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Country;
