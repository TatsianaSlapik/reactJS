import axios from "axios";
import { TYPE_SORT_NAME } from "../components/SortControl/SortControl";

const endpoint = "http://localhost:4000/movies";

export async function getMovies(sortCriterion, genderFilter, searchValue) {
  try {
    const searchByValue =
      sortCriterion === TYPE_SORT_NAME.date
        ? "genres"
        : sortCriterion === TYPE_SORT_NAME.title
        ? sortCriterion.toLowerCase()
        : "";
    const genderFilterValue = genderFilter === "All" ? "" : genderFilter;

    return await axios.get(
      `${endpoint}?searchBy=${searchByValue}&search=${searchValue}&filter=${genderFilterValue}`
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(movieId) {
  try {
    return await axios.get(`${endpoint}/${movieId}`);
  } catch (error) {
    console.error(error);
  }
}

export async function createMovie(movie) {
  try {
    return await axios.post(`${endpoint}`, {
      title: movie.title,
      tagline: movie.tagline,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.vote_count,
      poster_path: movie.poster_path,
      overview: movie.overview,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      genres: movie.genres,
    });
  } catch (error) {
    console.error(error);
  }
}
export async function updateMovie(movie) {
  try {
    return await axios.put(`${endpoint}`, {
      title: movie.title,
      tagline: movie.tagline,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      release_date: movie.vote_count,
      poster_path: movie.poster_path,
      overview: movie.overview,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      genres: movie.genres,
    });
  } catch (error) {
    console.error(error);
  }
}
