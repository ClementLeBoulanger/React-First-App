import React, { Component } from 'react';

export default class MoviesDetails extends Component {

  render() {
    return (
      <div className="w-25 border p-4 d-flex flex-column">
        <h5>{ this.props.movie.title }</h5>
        <hr className="w-100" />
        <div>
          <img src={ this.props.movie.img } alt="" className="pb-2 d-block mx-auto" />
        </div>
        <hr className="w-100" />
        <p className="text-secondary m-0">{ this.props.movie.details }</p>
        <hr className="w-100" />
        <p>{ this.props.movie.description }</p>
      </div>
    );
  }
}
