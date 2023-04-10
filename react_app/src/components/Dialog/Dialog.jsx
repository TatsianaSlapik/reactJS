import React from "react";
import { Portal } from "react-portal";

import Button from "../Button/Button";
import "./Dialog.css";
const Dialog = ({ title, onClick, content }) => {
  return (
    <div className='dialog'>
      <div className='dialog_header'>
        <h2>{title}</h2>
        <Button name='x' onClick={onClick} />
      </div>
      <Portal>{content}</Portal>
    </div>
  );
};

export default Dialog;
