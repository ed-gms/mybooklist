import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookGrid from './BookGrid';

class Main extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <BookGrid />
      </div>
    );
  }
}

export default Main;
