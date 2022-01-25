import React from 'react';
import FavoriList from '../favoris/components/favori-list/FavorisList'

const Favori = (props) => {
  return (
    <>
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.removeFavori}
          />
        </div>
    </>
  )
}

export default Favori;
