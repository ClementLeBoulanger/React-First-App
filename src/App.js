import React, { Component } from 'react';
import Header from './components/header/Header';
import MoviesDetails from './components/movie-details/MovieDetails';
import MoviesList from './components/movie-list/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill p-2">
          <MoviesList />
          <MoviesDetails />
        </div>
      </div>
    );
  }
}

export default App;
