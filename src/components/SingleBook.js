import React, { Component } from 'react';
import Books from '../../src/mockup-data';

class SingleBook extends Component {
  render() {
    return (
      <div className="single-book">
        <img src={Books[0].Image} alt="book" />
        <p>{Books[0].Title}</p>
        <p>{Books[0].Author}</p>
        <p>{Books[0].About}</p>
      </div>
    );
  }
}

export default SingleBook;
