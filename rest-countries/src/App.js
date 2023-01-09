import { useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { DarkModeContext } from "./utils/DarkModeContext";
import CountriesLayout, {
  loader as getCountriesLoader,
} from "./pages/CountriesLayout";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import CountryLayout, {
  loader as getCountryLoader,
} from "./pages/CountryLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route
          index
          element={<CountriesLayout />}
          loader={getCountriesLoader}
        />

        <Route
          path=":countryName"
          element={<CountryLayout />}
          loader={getCountryLoader}
        ></Route>
      </Route>
    )
  );

  const { darkMode } = useContext(DarkModeContext);
  return (
    <main className={darkMode ? `container-dark` : `container-light`}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
