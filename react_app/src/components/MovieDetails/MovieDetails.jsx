import React from "react";
import SearchImg from "../../img/search.png";

import "./MovieDetails.css";

const MovieDetails = ({ movie, onClick }) => {
  return (
    movie && (
      <div className='movieDetails'>
        <div className='movie-header'>
          <p>netflixroulette</p>
          <button className='movie-btn' onClick={onClick}>
            <img src={SearchImg} alt='SearchImg' />
          </button>
        </div>
        <div className='movie' key={movie.id}>
          <img className='movie-img' src={movie.poster_path} alt={"name"} />
          <div className='movie-info'>
            <div className='movie-title'>
              <h1 className='movie-name'>{movie.title}</h1>
              <div className='movie-rating'>
                <p>{movie.vote_average}</p>
              </div>
            </div>
            <p className='movie-genre'>{movie?.genres?.join("&")}</p>
            <div className='movie-red'>
              <p className='movie-date'>{movie?.release_date?.slice(0, 4)}</p>
              <p className='movie-time'>{movie.runtime}</p>
            </div>
            <div className='movie-description'>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default MovieDetails;
