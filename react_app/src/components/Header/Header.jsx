import React from "react";
import Search from "../Search/Search";

import "./Header.css";

import HeaderImg from "../../img/header.png";
import MovieDetails from "../MovieDetails/MovieDetails";

const Header = ({ onSearch, movie, search }) => {
  return (
    <header className='header'>
      <img src={HeaderImg} alt='header' />

      {movie ? (
        <MovieDetails movie={movie} />
      ) : (
        <Search search={search} onSearch={onSearch} />
      )}
    </header>
  );
};

export default Header;
