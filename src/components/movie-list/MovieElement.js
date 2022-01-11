import React, { Component } from 'react';

export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render(){
    return (
      <div onMouseEnter={ this.mouseEnter } className="w-50 px-2 pb-2">
        <div className="border d-flex">
          <img width="150" height="200" src={ this.props.movie.img } alt=""/>
          <div className="flex-fill d-flex flex-column px-3 pt-3">
            <h5>{ this.props.movie.title }</h5>
            <hr className="w-100"/>
            <p>{ this.props.movie.details }</p>
          </div>
        </div>
      </div>
    );
  }
}
