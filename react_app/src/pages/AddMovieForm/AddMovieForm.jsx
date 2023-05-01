import React from "react";

import MovieForm from "../../components/MovieForm/MovieForm";
import Dialog from "../../components/Dialog/Dialog";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../../api/api";
import { v4 as uuidv4 } from "uuid";

export const initialMovieState = {
  title: "",
  tagline: "movie",
  vote_average: 0,
  vote_count: 0,
  release_date: "",
  poster_path: "",
  overview: "",
  budget: 0,
  revenue: 0,
  runtime: 0,
  genres: "",
  id: uuidv4(),
};

const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (formValue) => {
    navigate("/");
    createMovie(formValue)
      .then(function (response) {
        console.log("added movie");
      })
      .catch(() => {
        console.log("something wrong");
      });
  };
  return (
    <Dialog
      title={"ADD MOVIE"}
      onClick={() => {
        navigate("/");
      }}
      content={<MovieForm movie={initialMovieState} onSubmit={handleSubmit} />}
    />
  );
};
export default AddMovieForm;
