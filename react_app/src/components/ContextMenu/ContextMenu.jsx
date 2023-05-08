import React from "react";

import ContextImg from "../../img/context.png";
import "./ContextMenu.css";

const ContextMenu = (movieId) => {
  return (
    <div className='dropdown'>
      <button className='dropbtn'>
        <img src={ContextImg} alt={"context"} />
      </button>
      <div className='dropdown-content'>
        <a href={`/${movieId.movieId}/edit`}>Edit</a>
        <a href={`/`}>Delete</a>
      </div>
    </div>
  );
};
export default ContextMenu;
