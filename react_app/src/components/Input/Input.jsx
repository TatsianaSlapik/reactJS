import React from "react";

import "./Input.css";

const Input = ({
  name,
  title,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <>
      <label className='label_title'> {title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
};
export default Input;
