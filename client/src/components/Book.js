import React from "react";
import Books from "../mockup-data.json";

export default function Book() {
  return (
    <article className="single-book">
      <img src={Books.data[0].Image} alt="book" />
      <p>{Books.data[0].Title}</p>
      <p>{Books.data[0].Author}</p>
      <p>{Books.data[0].About}</p>
      <button>Add to shelf</button>
    </article>
  );
}
