import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SingleBook from './components/SingleBook';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/books/:bookId" component={SingleBook} />
        </Switch>
      </div>
    );
  }
}

export default App;
