import React from "react";

import "./MovieTile.css";

const MovieTile = ({ movie, onClick }) => {
  return (
    <div className='film' key={movie.id} onClick={onClick}>
      <img className='film-img' src={movie.poster_path} alt={movie.title} />
      <div className='film-description'>
        <p className='film-title'>{movie.title}</p>
        <div className='film-date'>
          <p>{movie.release_date.slice(0, 4)}</p>
        </div>
        <p className='film-genre'>{movie.genres.join(",")}</p>
      </div>
    </div>
  );
};
export default MovieTile;
