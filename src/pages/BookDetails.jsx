import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.list.find((b) => b.id == id));

  if (!book) return <h1 className="text-3xl p-6">Book not found</h1>;

  return (
    <div>
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <p className="mt-2 text-lg text-gray-700">By {book.author}</p>
      <p className="text-blue-700 mt-1">{book.category}</p>

      <p className="mt-6 leading-relaxed">{book.description}</p>
      <p className="mt-4 font-semibold">Rating: ⭐ {book.rating}</p>

      <Link to="/books" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Back to Browse
      </Link>
    </div>
  );
}
