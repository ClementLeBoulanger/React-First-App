import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {

  mouseClick = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render(){
    return (
      <div onClick={this.mouseClick} className={ "d-flex bg-light shadow flex-row " + Style.container }>
        <img width="185" src={ this.props.movie.img } alt=""/>
        <div className="flex-fill d-flex flex-column px-3 pt-3">
          <h5>{ this.props.movie.title }</h5>
          <hr className="w-100"/>
          <p>{ this.props.movie.details }</p>
        </div>
      </div>
    );
  }
}
