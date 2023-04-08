import React from "react";

import MovieTile from "./MovieTile.jsx";
import { FILMS_DATA } from "../../data/data.js";

export default {
  title: "MovieTile",
  component: MovieTile,
};

export const MovieTileStories = () => (
  <MovieTile movie={FILMS_DATA[0]} onClick={() => {}} />
);
