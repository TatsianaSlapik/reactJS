import React from "react";
import { FILMS_DATE } from "../../data/data.js";
import MovieDetails from "./MovieDetails.jsx";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

export const MovieDetailsStories = () => <MovieDetails movie={FILMS_DATE[0]} />;
