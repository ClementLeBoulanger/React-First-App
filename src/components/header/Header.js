import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <a className="navbar-brand font-weight-bold" href="/">🍿 🎬 Allo Movies</a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Favoris</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
