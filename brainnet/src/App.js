import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top menu">
          <div className="container">
            <Navigation />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
