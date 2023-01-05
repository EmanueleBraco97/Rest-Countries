import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./Countries/Countries";
import Country from "./Country/Country";
import "./Main.css";

import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import NoMatch from "./NoMatch/NoMatch";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Countries />,
    },

    {
      path: "/country/:countryName",
      element: <Country />,
    },

    {
      path: "*",
      element: <NoMatch />,
    },
  ]);

  const { darkMode } = useContext(DarkModeContext);
  return (
    <main className={darkMode ? `container-dark` : `container-light`}>
      <RouterProvider router={router} />
    </main>
  );
};

export default Main;
