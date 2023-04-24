import React from "react";

import "./Input.css";

const Input = ({
  name,
  title,
  type = "text",
  value,
  onChange,
  required = false,
  defaultValue,
  placeholder,
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
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </>
  );
};
export default Input;
