import { useEffect, useState } from "react";

import { FILMS_DATA, genres } from "../../data/data";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import SortControl from "../../components/SortControl/SortControl";

import "./MovieListPage.css";
import MovieTile from "../../components/MovieTile/MovieTile";
import Search from "../../components/Search/Search";

import HeaderImg from "../../img/header.png";
import { getMovie } from "../../api/api";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieListPage = () => {
  let navigate = useNavigate();

  const [movieList, setMovieList] = useState(FILMS_DATA);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query");
  const sortCriterion = searchParams.get("sortBy");
  const activeGenre = searchParams.get("genre");

  useEffect(() => {
    getMovie(sortCriterion, activeGenre, searchQuery)
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
    setSearchParams({ query: value });
  };

  const handleChangeSortControl = (event) => {
    setSearchParams({ sortBy: event.target.value });
  };
  const handleChangeGenreSelect = (par) => {
    setSearchParams({ genre: par });
  };

  return (
    <>
      <header className='header'>
        <>
          <img src={HeaderImg} alt='header' />
          <Search searchParams={searchParams} onSearch={handleSearch} />
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
            key={movie.id}
            movie={movie}
            onClick={() => {
              navigate(`${"/" + movie.id}`);
            }}
          />
        ))}
      </div>
    </>
  );
};
export default MovieListPage;
