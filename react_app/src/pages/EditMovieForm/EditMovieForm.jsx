import React, { useEffect, useState } from "react";

import MovieForm from "../../components/MovieForm/MovieForm";
import Dialog from "../../components/Dialog/Dialog";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, updateMovie } from "../../api/api";

const EditMovieForm = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(movieId)
      .then(function (response) {
        setMovie(response.data);
      })
      .catch(() => {
        setMovie({});
      });
  }, [movieId]);

  const hangleSubmit = (formValue) => {
    updateMovie(formValue)
      .then(function (response) {
        console.log(response);
      })
      .catch(() => {
        console.log("something wrong");
      });
  };

  return (
    <div>
      <Dialog
        title={"EDIT MOVIE"}
        onClick={() => {
          navigate("/");
        }}
        content={<MovieForm movie={movie} onSubmit={hangleSubmit} />}
      />
    </div>
  );
};
export default EditMovieForm;
