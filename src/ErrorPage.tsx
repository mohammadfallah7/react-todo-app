import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-error">
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
