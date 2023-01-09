import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../utils/DarkModeContext";

import "./Country.css";

const Country = ({ country }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className="info-country-principal">
      <button className="button-back">
        <FaArrowLeft />
        <Link to="/">Back</Link>
      </button>

      {country.map((country, index) => (
        <section className="country-info-container" key={index}>
          <div className="country-info-img">
            <img className="img-flag" src={country.flags.png} alt="flags"></img>
          </div>

          <div className="country-info">
            <div
              className={
                darkMode
                  ? `country-info-left country-info-left-dark`
                  : `country-info-left`
              }
            >
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

              <div className="data-border-countries">
                <h5>Border Countries:</h5>
                {country.borders?.map((border, index) => (
                  <ul key={index}>
                    <li>
                      <button>{border}</button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div
              className={
                darkMode
                  ? `country-info-right country-info-right-dark`
                  : `country-info-right`
              }
            >
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
                <ul className="languages">
                  <li>{Object.values(country.languages)}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Country;
