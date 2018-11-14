import React from "react";
import { Link, Route } from "react-router-dom";
import Books from "../mockup-data.json";

export default function BookGrid() {
  return (
    <div>
      {Books.data.map(book => (
        <div key={book.id}>
          <img src={book.Image} alt="book" />
          <Link to={`/books/${book.id}`}>
            <p>{book.Title}</p>
          </Link>
          <p>{book.Author}</p>
          <p>{book.About}</p>
        </div>
      ))}
    </div>
  );
}
