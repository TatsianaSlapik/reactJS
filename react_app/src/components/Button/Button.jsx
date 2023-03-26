import React from "react";

import "./Button.css";

const Button = ({ name, onClick, newStyle }) => (
  <button className={`btn ${newStyle}`} onClick={onClick}>
    {name}
  </button>
);

export default Button;
