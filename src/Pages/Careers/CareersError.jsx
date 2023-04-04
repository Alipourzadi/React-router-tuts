import React from "react";
import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl">{error.message}</h2>
      <div className="flex space-x-1">
        <p>Go to</p>{" "}
        <Link className="underline text-secondary-500" to="/">
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default CareersError;
