import React from "react";
import Input from "./Input.jsx";

export default {
  title: "Input",
  component: Input,
};

export const InputStories = () => (
  <Input
    name='add text'
    title='Please add text'
    type='text'
    value='add text'
    onChange={() => {}}
    defaultValue='add text'
  />
);
