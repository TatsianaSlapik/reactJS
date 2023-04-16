import { useState } from "react";
import Header from "../../components/Header/Header";

import { FILMS_DATA, genres } from "../../data/data";
import GenreSelect from "../../components/GenreSelect/GenreSelect";
import SortControl from "../../components/SortControl/SortControl";

import "./MovieListPage.css";
import MovieTile from "../../components/MovieTile/MovieTile";

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriterion, setSortCriterion] = useState("Title");

  const [activeGenre, setActiveGenre] = useState("All");

  const [movieList, setMovieList] = useState(FILMS_DATA);
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  return (
    <>
      <Header
        search={searchQuery}
        onSearch={(event) => setSearchQuery(event.target.value)}
        movie={selectedMovie}
      />
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
