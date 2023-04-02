import React from "react";
import { genres } from "../../data/data.js";
import GenreSelect from "./GenreSelect.jsx";

export default {
  title: "GenreSelect",
  component: GenreSelect,
};

export const GenreSelectStories = () => (
  <GenreSelect genres={genres} onSelect={() => {}} />
);
