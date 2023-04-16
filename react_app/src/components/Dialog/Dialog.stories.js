import React from "react";
import Dialog from "./Dialog";
import MovieForm from "../MovieForm/MovieForm";
import { FILMS_DATA } from "../../data/data";
import Button from "../Button/Button";

const ContentDeleteMovie = (
  <div className='deleteMovie'>
    <p>Are you sure you want to delete this movie?</p>
    <Button name='CONFIRM' newStyle='submit' />
  </div>
);

export default {
  title: "Dialog",
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "DELETE MOVIE",
  onClick: () => {},
  content: ContentDeleteMovie,
};

export const AddMovie = Template.bind({});

AddMovie.args = {
  title: "ADD MOVIE",
  onClick: () => {},
  content: <MovieForm />,
};

export const EditMovie = Template.bind({});

EditMovie.args = {
  title: "EDIT MOVIE",
  onClick: () => {},
  content: <MovieForm movie={FILMS_DATA[0]} />,
};
