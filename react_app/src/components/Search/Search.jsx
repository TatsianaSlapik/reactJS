import React, { useState } from "react";
import {
  SEARCH_BTN_NAME,
  SEARCH_INPUT_TEXT,
  SEARCH_TITLE,
} from "../../constants/searchConst";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Search.css";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  return (
    <div className='search'>
      <h1>{SEARCH_TITLE}</h1>
      <form className='search-var'>
        <Input
          onChange={(e) => setValue(e.target.value)}
          defaultValue={SEARCH_INPUT_TEXT}
        />
        <Button
          type='submit'
          name={SEARCH_BTN_NAME}
          onClick={() => onSearch(value)}
        />
      </form>
    </div>
  );
};
export default Search;
