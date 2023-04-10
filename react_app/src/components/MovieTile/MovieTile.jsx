import React from "react";

import "./MovieTile.css";

const MovieTile = ({ movie, onClick }) => {
  return (
    <div className='film' key={movie.id} onClick={onClick}>
      <img src={movie.img} alt={movie.name} />
      <div className='film-description'>
        <p className='film-title'>{movie.name}</p>
        <div className='film-date'>
          <p>{movie.years}</p>
        </div>
        <p className='film-genre'>{movie.genre}</p>
      </div>
    </div>
  );
};
export default MovieTile;
