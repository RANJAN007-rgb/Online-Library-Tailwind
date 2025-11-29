import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="text-center py-10">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-gray-700 text-xl">Page Not Found</p>
      <p className="mt-2 text-gray-500">Invalid URL: {location.pathname}</p>

      <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
}
