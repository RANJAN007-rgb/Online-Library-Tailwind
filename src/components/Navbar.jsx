import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center text-white">
        <Link to="/" className="text-xl font-bold">Online Library</Link>

        <div className="flex gap-6">
          <Link className="hover:text-gray-300" to="/">Home</Link>
          <Link className="hover:text-gray-300" to="/books">Browse</Link>
          <Link className="hover:text-gray-300" to="/add-book">Add Book</Link>
        </div>
      </div>
    </nav>
  );
}
