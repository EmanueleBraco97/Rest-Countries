import { useLoaderData } from "react-router-dom";
import Countries from "../components/Countries/Countries";
import { getCountries } from "../utils/api";

const CountriesLayout = () => {
  const loader = useLoaderData();

  return <>{<Countries countries={loader} />}</>;
};

export default CountriesLayout;

export function loader() {
  return getCountries();
}
