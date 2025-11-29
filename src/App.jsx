import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <div className='max-w-6xl mx-auto p-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BrowseBooks />} />
          <Route path='/books/:category' element={<BrowseBooks />} />
          <Route path='/books/details/:id' element={<BookDetails />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
