import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", author: "", category: "", description: "", rating: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category) {
      alert("Fill all fields");
      return;
    }
    dispatch(addBook({ id: Date.now(), ...form }));
    navigate("/books");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Add a New Book</h1>

      <form className="bg-white shadow-lg p-6 rounded-xl grid gap-4" onSubmit={submit}>
        <input className="border p-3 rounded-lg" placeholder="Title" onChange={(e)=>setForm({...form, title:e.target.value})}/>
        <input className="border p-3 rounded-lg" placeholder="Author" onChange={(e)=>setForm({...form, author:e.target.value})}/>
        <input className="border p-3 rounded-lg" placeholder="Category" onChange={(e)=>setForm({...form, category:e.target.value})}/>
        <textarea className="border p-3 rounded-lg" placeholder="Description" onChange={(e)=>setForm({...form, description:e.target.value})}/>
        <input className="border p-3 rounded-lg" placeholder="Rating" type="number" onChange={(e)=>setForm({...form, rating:e.target.value})}/>

        <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add Book
        </button>
      </form>
    </div>
  );
}
