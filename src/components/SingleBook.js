import React, { Component } from 'react';
import Books from '../../src/mockup-data';

class SingleBook extends Component {
  render() {
    return (
      <div className="single-book">
        <p style={{ fontSize: 24, fontWeight: 'bold', color: 'red' }}>
          This is the single book page
        </p>
        <img src={Books[0].Image} alt="book" />
        <p>{Books[0].Title}</p>
        <p>{Books[0].Author}</p>
        <p>{Books[0].About}</p>
        <button>Add to shelf</button>
      </div>
    );
  }
}

export default SingleBook;
