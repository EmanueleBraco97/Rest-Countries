import axios from "axios";

export async function getCountries() {
  const url = "https://restcountries.com/v3.1";
  const response = await axios.get(`${url}/all`);
  return response.data;
}

export async function getCountry(countryName) {
  const url = "https://restcountries.com/v3.1";
  const response = await axios.get(`${url}/name/${countryName}`);
  return response.data;
}
