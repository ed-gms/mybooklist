import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Main from "./components/Main";
// import BookDetails from "./components/BookDetails";
import Book from "./components/Book";

class App extends Component {
  render() {
    return (
      <div>
        <Book />
        {/* <NavBar />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/books/:bookId" component={BookDetails} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
