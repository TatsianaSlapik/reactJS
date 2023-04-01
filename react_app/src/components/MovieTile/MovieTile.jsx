import React from "react";

import "./MovieTile.css";

const MovieTile = ({ id, img, name, years, genre }) => {
  return (
    <div className='film' key={id} onClick={() => {}}>
      <img src={img} alt={name} />
      <div className='film-description'>
        <p className='film-title'>{name}</p>
        <p className='film-date'>{years}</p>
        <p className='film-genre'>{genre}</p>
      </div>
    </div>
  );
};
export default MovieTile;
