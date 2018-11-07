import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from '../../src/mockup-data.json';

class BookGrid extends Component {
  render() {
    return (
      <div>
        <img src={Books.data[0].Image} alt="book" />
        <Link to={`/books/${Books.data[0].Title}`}>
          <p>{Books.data[0].Title}</p>
        </Link>
        <p>{Books.data[0].Author}</p>
        <p>{Books.data[0].About}</p>
      </div>
    );
  }
}

export default BookGrid;
