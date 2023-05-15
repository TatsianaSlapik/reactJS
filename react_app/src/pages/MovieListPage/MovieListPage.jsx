import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { getMovies } from "../../api/api";

import { FILMS_DATA, genres } from "../../data/data";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import SortControl from "../../components/SortControl/SortControl";
import MovieTile from "../../components/MovieTile/MovieTile";
import Search from "../../components/Search/Search";

import "./MovieListPage.css";
import HeaderImg from "../../img/header.png";

const MovieListPage = () => {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState(FILMS_DATA);
  const [params, setParams] = useState({
    query: "",
    sortBy: "title",
    genre: "All",
  });

  const [searchParams, setSearchParams] = useSearchParams({
    query: params.query,
    sortBy: params.sortBy,
    genre: params.genre,
  });

  const searchQuery = searchParams.get("query") ?? params.query;
  const sortCriterion = searchParams.get("sortBy") ?? params.sortBy;
  const activeGenre = searchParams.get("genre") ?? params.genre;

  useEffect(() => {
    getMovies(sortCriterion, activeGenre, searchQuery)
      .then(function (response) {
        setMovieList(
          response.data.data.length > 0 ? response.data.data : FILMS_DATA
        );

        FILMS_DATA.push(...response.data.data);
      })
      .catch(() => {
        setMovieList(FILMS_DATA);
      });
  }, [sortCriterion, activeGenre, searchQuery]);

  const handleSearch = (value) => {
    setParams({ query: value, ...params });
    setSearchParams({ query: value });
  };

  const handleChangeSortControl = (event) => {
    setParams({ ...params, sortBy: event.target.value });
    setSearchParams({ sortBy: event.target.value });
  };
  const handleChangeGenreSelect = (par) => {
    setParams({ ...params, genre: par });
    setSearchParams({ genre: par });
  };
  const handleClick = () => {
    navigate("new");
  };

  return (
    <div className='moveListPage'>
      <div className='dialogOpen'>
        <Outlet />
      </div>
      <header className='header'>
        <>
          <img src={HeaderImg} alt='header' />
          <Search onSearch={handleSearch} onClick={handleClick} />
        </>
      </header>
      <div className='menu'>
        <GenreSelect
          genres={genres}
          activeGenre={activeGenre}
          onGenreSelect={handleChangeGenreSelect}
        />
        <SortControl
          activeSortControl={sortCriterion}
          onChange={(event) => {
            handleChangeSortControl(event);
          }}
        />
      </div>
      <div className='movies'>
        {movieList.map((movie) => (
          <MovieTile
            key={movie.id + movie.title}
            movie={movie}
            onClick={() => {
              navigate(`${"/" + movie.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default MovieListPage;
