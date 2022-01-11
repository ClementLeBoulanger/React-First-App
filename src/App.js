import React, { Component } from 'react';
import Header from './components/header/Header';
import MoviesDetails from './components/movie-details/MovieDetails';
import MoviesList from './components/movie-list/MovieList';
import Loading from './components/utils/Loading';
import dataMovies from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
    setTimeout( () => {
        this.setState({
          movies: dataMovies,
          loaded: true
        })
    }, 2000);
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        { this.state.loaded ? (<div className="d-flex flex-row flex-fill p-2">
          <MoviesList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
          <MoviesDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
