import Film1 from "../img/film1.png";
import Film2 from "../img/film2.png";
import Film3 from "../img/film4.png";
import Film4 from "../img/film3.png";
import Film5 from "../img/film5.png";
import Film6 from "../img/film6.png";

export const genres = [
  { id: 0, genre: "All" },
  { id: 1, genre: "Documentary" },
  { id: 2, genre: "Comedy" },
  { id: 3, genre: "Horror" },
  { id: 4, genre: "Crime" },
];

export const FILMS_DATA = [
  {
    id: "1",
    poster_path: Film1,
    title: "Pulp Fiction",
    release_date: "1994",
    genres: ["Action", "Adventure"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
  },
  {
    id: "2",
    poster_path: Film2,
    title: "Bohemian Rhapsody",
    release_date: "2003",
    genres: ["Drama", "Biography", "Music"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview: "Drama, Biography, Music",
  },
  {
    id: "3",
    poster_path: Film3,
    title: "Kill Bill: Vol 2",
    release_date: "1994",
    genres: ["Action", "Adventure"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview: "Oscar winning Movie",
  },
  {
    id: "4",
    poster_path: Film4,
    title: "Avengers: War of Infinity",
    release_date: "2004",
    genres: ["Action", "Adventure"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview: "Action & Adventure",
  },

  {
    id: "5",
    poster_path: Film5,
    title: "Inception",
    release_date: "2003",
    genres: ["Action", "Adventure"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview: "Action & Adventure",
  },
  {
    id: "6",
    poster_path: Film6,
    title: "Reservoir dogs",
    release_date: "1994",
    genres: ["Action", "Adventure"],
    vote_average: "8.9",
    runtime: "2h 34min",
    overview: "Oscar winning Movie",
  },
];
