import React from "react";
import { FILMS_DATE } from "../../data/data.js";
import MovieTile from "./MovieTile.jsx";

export default {
  title: "MovieTile",
  component: MovieTile,
};

export const MovieTileStories = () => (
  <MovieTile movie={FILMS_DATE[0]} onClick={() => {}} />
);
