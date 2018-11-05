import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from '../../src/mockup-data';

class BookGrid extends Component {
  render() {
    console.log(Books[0]);
    return (
      <div>
        <img src={Books[0].Image} alt="book" />
        <Link to={`/books/${Books[0].Title}`}>
          <p>{Books[0].Title}</p>
        </Link>
        <p>{Books[0].Author}</p>
        <p>{Books[0].About}</p>
      </div>
    );
  }
}

export default BookGrid;
