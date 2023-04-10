import React from "react";
import MovieForm from "./MovieForm";

export default {
  title: "MovieForm",
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSubmit: () => {},
};
