import React from "react";
import { Link } from "react-router-dom";
import { booksData } from "../data/books";
import BookCard from "../components/BookCard";

export default function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Welcome to Online Library</h1>

      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="px-4 py-2 bg-white shadow rounded-lg hover:bg-gray-100 border">
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-3">Popular Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {booksData.slice(0, 3).map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
}
