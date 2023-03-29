import React from "react";

import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      Page not found
      <Link to={"/"}> Back Home</Link>
    </div>
  );
};

export default ErrorPage;
