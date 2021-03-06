import React from 'react';
import { SearchBar, MovieDetails, MovieList } from './components';
import Loading from '../../components/utils/Loading';

 const Films = (props) => {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.updateSelectedMovie}
            favoris={props.favoris}
            addFavori={props.addFavori}
            removeFavori={props.removeFavori}
          />
          <MovieDetails movie={props.movies[props.selectedMovie]} />
        </div>
      ) : (
        <Loading />
      )
      }
    </>
  )
}

export default Films;
