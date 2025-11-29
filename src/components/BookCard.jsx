import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg border transition">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">By {book.author}</p>
      <p className="text-xs text-blue-600 mt-1">{book.category}</p>

      <Link
        to={`/books/details/${book.id}`}
        className="block mt-4 text-blue-500 hover:text-blue-700"
      >
        View Details →
      </Link>
    </div>
  );
}
