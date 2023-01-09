import { useLoaderData } from "react-router-dom";
import { getCountry } from "../utils/api";
import Country from "../components/Country/Country";

function CountryLayout() {
  const loaderCountry = useLoaderData();

  return <>{<Country country={loaderCountry} />}</>;
}

export default CountryLayout;

export function loader({ params }) {
  const countryName = params.countryName;
  return getCountry(countryName);
}
