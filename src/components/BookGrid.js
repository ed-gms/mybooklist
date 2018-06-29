import React, { Component } from 'react';
import Books from '../../src/mockup-data';

class BookGrid extends Component {
  render() {
    console.log(Books[0]);
    return (
      <div>
        <img src={Books[0].Image} alt="book" />
        <p>{Books[0].Title}</p>
        <p>{Books[0].Author}</p>
        <p>{Books[0].About}</p>
      </div>
    );
  }
}

export default BookGrid;
