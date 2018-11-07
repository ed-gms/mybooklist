import React, { Component } from "react";
import Books from "../mockup-data.json";

class SingleBook extends Component {
  render() {
    return (
      <div className="single-book">
        <p style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
          This is the single book page
        </p>
        <img src={Books.data[0].Image} alt="book" />
        <p>{Books.data[0].Title}</p>
        <p>{Books.data[0].Author}</p>
        <p>{Books.data[0].About}</p>
        <button>Add to shelf</button>
      </div>
    );
  }
}

export default SingleBook;
