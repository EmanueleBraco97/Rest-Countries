import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <main id="error-content">
        <h1>An error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
