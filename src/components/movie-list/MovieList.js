import React, { Component } from 'react';
import MovieElement from './MovieElement';

export default class MoviesList extends Component {

  render() {
    return (
      <div className="w-75 p-4 d-flex flex-row flex-wrap align-content-start">
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
      </div>
    );
  }
}
