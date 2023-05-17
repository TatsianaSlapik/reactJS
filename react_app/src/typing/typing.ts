export interface IMovie {
  id: string;
  title: string;
  tagline: string;
  vote_average: number | string;
  vote_count: number | string;
  release_date: Date;
  poster_path: string;
  overview: string;
  budget: number | string;
  revenue: number | string;
  runtime: number;
  genres: string[];
}

export interface IMovieList {
  id: string;
  title: string;
  tagline?: string;
  vote_average: number;
  vote_count?: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget?: number | string;
  revenue?: number | string;
  runtime: number;
  genres: string[];
}
export interface IGenresList {
  id: number;
  genre: string;
}
