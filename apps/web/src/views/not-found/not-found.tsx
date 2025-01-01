import React from "react";
import { Link } from "@tanstack/react-router";

const NotFound: React.FC = () => {
  return (
    <div className="p-2 flex flex-col items-center justify-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
