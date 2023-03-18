import React, { useState } from "react";
import {
  SEARCH_BTN_NAME,
  SEARCH_INPUT_TEXT,
  SEARCH_TITLE,
} from "../../constants/searchConst";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Search.css";

const Search = () => {
  const [value, setValue] = useState(SEARCH_INPUT_TEXT);

  const onSearch = () => {};
  return (
    <div className='search'>
      <h1>{SEARCH_TITLE}</h1>
      <div className='search-var'>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
        <Button name={SEARCH_BTN_NAME} onClick={() => onSearch(value)} />
      </div>
    </div>
  );
};
export default Search;
