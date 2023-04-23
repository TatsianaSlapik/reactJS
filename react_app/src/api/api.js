import axios from "axios";
import { TYPE_SORT_NAME } from "../components/SortControl/SortControl";

const endpoint = "http://localhost:4000/movies";

export async function getMovie(sortCriterion, genderFilter, searchValue) {
  try {
    const searchByValue =
      sortCriterion === TYPE_SORT_NAME.date
        ? "genres"
        : sortCriterion === TYPE_SORT_NAME.title
        ? sortCriterion.toLowerCase()
        : "";
    const genderFilterValue = genderFilter === "All" ? "" : genderFilter;

    return await axios.get(
      `${endpoint}?searchBy=${searchByValue}&filter=${genderFilterValue}&search=${searchValue}`
    );
  } catch (error) {
    console.error(error);
  }
}
