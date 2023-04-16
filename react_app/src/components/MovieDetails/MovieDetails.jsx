import React from "react";

import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  return (
    movie && (
      <div className='movie' key={movie.id}>
        <img className='movie-img' src={movie.img} alt={"name"} />
        <div className='movie-info'>
          <div className='movie-title'>
            <h1 className='movie-name'>{movie.name}</h1>
            <div className='movie-rating'>
              <p>{movie.rating}</p>
            </div>
          </div>
          <p className='movie-genre'>{movie.genre}</p>
          <div className='movie-red'>
            <p className='movie-date'>{movie.years}</p>
            <p className='movie-time'>{movie.time}</p>
          </div>
          <div className='movie-description'>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    )
  );
};
export default MovieDetails;
