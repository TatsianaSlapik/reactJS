import React, { useEffect } from "react";

import Button from "../Button/Button";
import { genres as genresDef } from "../../data/data";
import "./MovieForm.css";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    movie && reset(movie);
  }, [movie, reset]);

  const handleReset = () => {
    reset(movie);
  };

  return (
    <form className='movieForm' onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>
        <label className='label_title'> {MOVIE_FORM.TITLE}</label>
        <input
          placeholder={MOVIE_FORM.DEFAULT_TITLE}
          {...register("title", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='date'>
        <label className='label_title'> {MOVIE_FORM.RELEASE_DATE}</label>
        <input
          placeholder={MOVIE_FORM.DEFAULT_RELEASE_DATE}
          type='date'
          {...register("release_date", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='url'>
        <label className='label_title'> {MOVIE_FORM.MOVIE_URL}</label>

        <input
          placeholder={MOVIE_FORM.DEFAULT_MOVIE_URL}
          {...register("poster_path", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='rating'>
        <label className='label_title'> {MOVIE_FORM.RATING}</label>

        <input
          placeholder={MOVIE_FORM.DEFAULT_RATING}
          type='number'
          step='any'
          {...register("vote_average", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='genre_form'>
        <label className='genreLabel' htmlFor='genreSelect'>
          {MOVIE_FORM.GENRE}
        </label>
        <select
          className='genreSelect'
          name='genreSelect'
          {...register("genres", {
            required: "This field is required",
          })}
        >
          {movie &&
            movie?.genres.map((genre, ind) => (
              <option key={ind} value={genre}>
                {genre}
              </option>
            ))}
          {genresDef.map((genre) => (
            <option key={genre.id} value={genre.genre}>
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
      <div className='runtime'>
        <label className='label_title'> {MOVIE_FORM.RUNTIME}</label>
        <input
          placeholder={MOVIE_FORM.DEFAULT_RUNTIME}
          type='number'
          step='any'
          {...register("runtime", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='overview'>
        <label className='label_title'> {MOVIE_FORM.OVERVIEW}</label>
        <textarea
          placeholder={MOVIE_FORM.DEFAULT_OVERVIEW}
          {...register("overview", {
            required: "This field is required",
          })}
        />
      </div>
      <div className='btns'>
        <Button
          name={MOVIE_FORM.BTN_NAME_RESET}
          onClick={handleReset}
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
