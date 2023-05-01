import React from "react";

import MovieForm from "../../components/MovieForm/MovieForm";
import Dialog from "../../components/Dialog/Dialog";
import { useNavigate } from "react-router-dom";

const AddMovieForm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Dialog
        title={"ADD MOVIE"}
        onClick={() => {
          navigate("/");
        }}
        content={<MovieForm />}
      />
    </div>
  );
};
export default AddMovieForm;
