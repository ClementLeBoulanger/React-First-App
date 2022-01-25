import React, { Component } from 'react';
import FavoriElement from './FavoriElement/FavoriElement';

export default class FavoriList extends Component {
  render (){
    return (
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        <h2 className='w-100 text-center'>Mes Favoris</h2>
        {this.props.favoris.map((f, index) => (
          <FavoriElement
            key={f.title + index}
            favori={f}
            removeFavori={this.props.removeFavori}
          />
        ))}
      </div>
    )
  }
}
