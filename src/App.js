import React, { Component } from 'react';
import Header from './components/header/Header';
import NotFound from './components/notfound/NotFound';
import apiMovie from './config/api.movie';
import Films from './features/films';
import Favoris from './features/favoris';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: []
    }
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then( moviesApi => {
        const movies = moviesApi.map(m => ({
          img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
          title: m.title,
          details: m.release_date + ' : ' + m.vote_average + '/10 (' + m.vote_count + ')',
          description: m.overview
        }));
        this.updateMovies(movies);
      })
      .catch(err => console.log(err));
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true
    })
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find(m => m.title === title);
    favoris.push(film);
    this.setState({
      favoris
    });
  }

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex( f => f.title === title);
    favoris.splice(index, 1);
    this.setState({
      favoris
    })
  }

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Routes>
            <Route
              path="/films" element={
              <Films
                {...this.props}
                loaded={this.state.loaded}
                updateMovies={this.updateMovies}
                updateSelectedMovie={this.updateSelectedMovie}
                movies={this.state.movies}
                selectedMovie={this.state.selectedMovie}
                addFavori={this.addFavori}
                removeFavori={this.removeFavori}
                favoris={this.state.favoris.map( f => f.title)}
              />}
            />
            <Route
              path="/favoris" element={
              <Favoris
              {...this.props}
              removeFavori={this.removeFavori}
              favoris={this.state.favoris}
              />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
