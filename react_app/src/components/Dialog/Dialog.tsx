
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
      {content && (
        <div>
          <Portal className='content'>{content}</Portal>
        </div>
      )}
    </div>
  );
};

export default Dialog;
