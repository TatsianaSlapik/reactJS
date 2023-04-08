import React from "react";

import MovieDetails from "./MovieDetails.jsx";
import { FILMS_DATA } from "../../data/data.js";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

export const MovieDetailsStories = () => <MovieDetails movie={FILMS_DATA[0]} />;
