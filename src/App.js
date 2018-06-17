import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p>This is my app...</p>
      </div>
    );
  }
}

export default App;
