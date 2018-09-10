import React, { Component } from 'react';
import logo from '../img/logo-blanco.png';

import '../css/wall.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
        aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="wall.html">
        <img className="logo" src={logo} alt="logo" />
      </a>
    </div>
    );
  }
}

export default Navigation;
