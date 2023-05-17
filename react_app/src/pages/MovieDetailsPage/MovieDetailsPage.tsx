import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { FILMS_DATA } from "../../data/data";
import { getMovieById } from "../../api/api";
import { IMovieList } from "../../typing/typing";

interface MovieDetailsPageProps {
  movieList: IMovieList[]
}

const MovieDetailsPage: FC<MovieDetailsPageProps> = ({ movieList = FILMS_DATA }) => {
  const navigate = useNavigate();

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(movieId)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(() => {
        const movieInfo = movieList.filter((film) => film.id === movieId)[0];

        setMovie(movieInfo);
      });
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
