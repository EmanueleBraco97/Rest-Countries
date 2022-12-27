import { Route, Routes } from "react-router-dom";
import Countries from "./Countries/Countries";
import Country from "./Country/Country";

const Main = () => {
  return (
    <main className="container">
      <Routes>
        <Route index element={<Countries />} />
        <Route path="/country/:countryName" element={<Country />} />
      </Routes>
    </main>
  );
};

export default Main;
