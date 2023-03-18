import React from "react";
import Search from "../Search/Search";

import "./Header.css";

import HeaderImg from "../../img/header.png";
const Header = () => {
  return (
    <header className='header'>
      <img src={HeaderImg} alt='header' />
      <Search />
    </header>
  );
};

export default Header;
