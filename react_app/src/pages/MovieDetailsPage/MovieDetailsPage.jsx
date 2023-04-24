import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { FILMS_DATA } from "../../data/data";

const MovieDetailsPage = ({ movieList = FILMS_DATA }) => {
  let navigate = useNavigate();

  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let movieInfo = movieList.filter((film) => film.id === movieId)[0];

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
