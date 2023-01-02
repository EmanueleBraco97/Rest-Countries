import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { url } from "../../../utils/api";

import "./Country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

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
        setIsError(error.message);
      }
    };
    getCountryName();
  }, [countryName]);

  return (
    <div className="info-country">
      <button className="button-back">
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
              <h5>
                Native Name: <span>{country.name.common}</span>
              </h5>
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>

            <div className="country-info-right">
              <h5>
                Top Level Domain: <span>{country.tld}</span>
              </h5>
              {/* <div>
                Currencies: {""}
                {Object.keys(country.currencies).map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>{country[item].name}</li>
                    </ul>
                  );
                })}
              </div> */}
              <h5>
                Languages:{" "}
                <span className="languages">
                  {Object.entries(country.languages)}
                </span>
              </h5>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Country;
