import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { FILMS_DATA } from "../../data/data";

const MovieDetailsPage = ({ movieList = FILMS_DATA }) => {
  const navigate = useNavigate();

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movieInfo = movieList.filter((film) => film.id === movieId)[0];

    setMovie(movieInfo);
  }, [movieId, movieList]);

  return (
    movie && (
      <MovieDetails
        movie={movie}
        onClick={() => {
          navigate("/");
        }}
      />
    )
  );
};
export default MovieDetailsPage;
