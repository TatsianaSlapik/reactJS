import React from "react";
import { genres } from "../../data/data";
import GenreSelect from "../GenreSelect/GenreSelect";
import SortControl from "../SortControl/SortControl";

import "./Menu.css";

const Menu = () => {
  return (
    <div className='menu'>
      <GenreSelect
        genres={genres}
        onSelect={(value) => {
          alert(value);
        }}
      />
      <SortControl
        onChange={(event) => {
          console.log("Selected Value ", event.target.value);
        }}
      />
    </div>
  );
};
export default Menu;
