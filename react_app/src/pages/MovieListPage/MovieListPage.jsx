import { useEffect, useState } from "react";

import { FILMS_DATA, genres } from "../../data/data";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import SortControl, {
  TYPE_SORT_NAME,
} from "../../components/SortControl/SortControl";

import "./MovieListPage.css";
import MovieTile from "../../components/MovieTile/MovieTile";
import Search from "../../components/Search/Search";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import HeaderImg from "../../img/header.png";
import { getMovie } from "../../api/api";

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState(TYPE_SORT_NAME.title);

  const [activeGenre, setActiveGenre] = useState("All");

  const [movieList, setMovieList] = useState(FILMS_DATA);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  useEffect(() => {
    getMovie(sortCriterion, activeGenre, searchQuery)
      .then(function (response) {
        setMovieList(response.data.data);
      })
      .catch(() => {
        setMovieList(FILMS_DATA);
      });
  }, [sortCriterion, activeGenre, searchQuery]);
  return (
    <>
      <header className='header'>
        {selectedMovie ? (
          <MovieDetails
            movie={selectedMovie}
            onClick={() => setSelectedMovie(undefined)}
          />
        ) : (
          <>
            <img src={HeaderImg} alt='header' />
            <Search
              search={searchQuery}
              onSearch={(event) => setSearchQuery(event.target.value)}
            />
          </>
        )}
      </header>
      <div className='menu'>
        <GenreSelect
          genres={genres}
          activeGenre={activeGenre}
          onGenreSelect={setActiveGenre}
        />
        <SortControl
          activeSortControl={sortCriterion}
          onChange={(event) => {
            setSortCriterion(event.target.value);
          }}
        />
      </div>
      <div className='movies'>
        {movieList.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            onClick={() => {
              setSelectedMovie(movie);
            }}
          />
        ))}
      </div>
    </>
  );
};
export default MovieListPage;
