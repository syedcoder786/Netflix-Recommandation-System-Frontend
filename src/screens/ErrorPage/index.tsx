import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <p className="text-white text-2xl">
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred"}
      </p>
    </>
  );
};

export default ErrorPage;
