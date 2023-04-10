import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { genres } from "../../data/data";
import "./MovieForm.css";

const MOVIE_FORM = {
  TITLE: "TITLE",
  DEFAULT_TITLE: "Movie title",
  RELEASE_DATE: "RELEASE DATE",
  DEFAULT_RELEASE_DATE: "Select Date",
  MOVIE_URL: "MOVIE URL",
  DEFAULT_MOVIE_URL: "https://",
  RATING: "RATING",
  DEFAULT_RATING: "7.8",
  GENRE: "GENRE",
  DEFAULT_GENRE: "Select Genre",
  RUNTIME: "RUNTIME",
  DEFAULT_RUNTIME: "minutes",
  OVERVIEW: "OVERVIEW",
  DEFAULT_OVERVIEW: "Movie description",
  BTN_NAME_RESET: "RESET",
  BTN_NAME_SUBMIT: "SUBMIT",
};

const MovieForm = ({ onSubmit, movie }) => {
  return (
    <form className='movieForm' onSubmit={onSubmit}>
      <div className='title'>
        <Input
          name={MOVIE_FORM.TITLE}
          title={MOVIE_FORM.TITLE}
          value={movie ? movie.name : MOVIE_FORM.DEFAULT_TITLE}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='date'>
        <Input
          name={MOVIE_FORM.RELEASE_DATE}
          title={MOVIE_FORM.RELEASE_DATE}
          defaultValue={MOVIE_FORM.DEFAULT_RELEASE_DATE}
          type='date'
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='url'>
        <Input
          name={MOVIE_FORM.MOVIE_URL}
          title={MOVIE_FORM.MOVIE_URL}
          defaultValue={MOVIE_FORM.DEFAULT_MOVIE_URL}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='rating'>
        <Input
          name={MOVIE_FORM.RATING}
          title={MOVIE_FORM.RATING}
          defaultValue={MOVIE_FORM.DEFAULT_RATING}
          type='number'
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='genre_form'>
        <label className='genreLabel' htmlFor='genreSelect'>
          {MOVIE_FORM.GENRE}
        </label>
        <select className='genreSelect' name='genreSelect' onChange={() => {}}>
          <option
            value={MOVIE_FORM.DEFAULT_GENRE}
            defaultValue={MOVIE_FORM.DEFAULT_GENRE}
          >
            {MOVIE_FORM.DEFAULT_GENRE}
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
      <div className='runtime'>
        <Input
          name={MOVIE_FORM.RUNTIME}
          title={MOVIE_FORM.RUNTIME}
          defaultValue={MOVIE_FORM.DEFAULT_RUNTIME}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className='overview'>
        <label className='label_title'> {MOVIE_FORM.OVERVIEW}</label>
        <textarea>
          {movie ? movie.description : MOVIE_FORM.DEFAULT_OVERVIEW}
        </textarea>
      </div>
      <div className='btns'>
        <Button
          name={MOVIE_FORM.BTN_NAME_RESET}
          onClick={() => {}}
          newStyle='reset'
        />
        <Button
          name={MOVIE_FORM.BTN_NAME_SUBMIT}
          type='submit'
          newStyle='submit'
        />
      </div>
    </form>
  );
};

export default MovieForm;
