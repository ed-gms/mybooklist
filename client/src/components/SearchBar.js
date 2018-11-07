import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="Title, Author, ISBN"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
