import React, { useEffect, useState } from "react";

import MovieForm from "../../components/MovieForm/MovieForm";
import Dialog from "../../components/Dialog/Dialog";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, updateMovie } from "../../api/api";

const EditMovieForm = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(() => {
        setMovie({});
      });
  }, [movieId]);

  const handleSubmit = (formValue) => {
    navigate("/");
    updateMovie(formValue)
      .then(function (response) {
        console.log("update movie");
      })
      .catch(() => {
        if (!movie) {
          return;
        }
      });
  };

  return (
    <Dialog
      title={"EDIT MOVIE"}
      onClick={() => {
        navigate("/");
      }}
      content={<MovieForm movie={movie} onSubmit={handleSubmit} />}
    />
  );
};
export default EditMovieForm;
