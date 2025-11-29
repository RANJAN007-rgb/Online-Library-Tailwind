import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                        book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">{category ? `Browse — ${category}` : "Browse Books"}</h1>

      <input
        type="text"
        placeholder="Search books..."
        className="w-full p-3 rounded-lg border shadow my-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.length ? filteredBooks.map((book) =>
          <BookCard key={book.id} book={book}/>
        ) : <p>No books found.</p>}
      </div>
    </div>
  );
}
