import React from "react";
import Input from "./Input.jsx";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "add text",
  title: "Please add text",
  type: "text",
  value: "add text",
  onChange: () => {},
  defaultValue: "add text",
};
