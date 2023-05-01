import React, { useState } from "react";
import {
  SEARCH_BTN_NAME,
  SEARCH_INPUT_TEXT,
  SEARCH_TITLE,
} from "../../constants/searchConst";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch, onClick }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Button name='+ add movie' onClick={onClick} newStyle='addMovie'></Button>

      <div className='search'>
        <h1>{SEARCH_TITLE}</h1>
        <form className='search-var'>
          <Input
            onChange={(e) => setValue(e.target.value)}
            defaultValue={value}
            placeholder={SEARCH_INPUT_TEXT}
          />
          <Button
            type='submit'
            name={SEARCH_BTN_NAME}
            onClick={(e) => {
              e.preventDefault();
              onSearch(value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default Search;
