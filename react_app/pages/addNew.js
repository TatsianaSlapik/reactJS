import Dialog from "../src/components/Dialog/Dialog";
import { useRouter } from "next/router";
import MovieForm from "../src/components/MovieForm/MovieForm";
import { v4 as uuidv4 } from "uuid";

export const initialMovieState = {
  title: "",
  tagline: "movie",
  vote_average: 0,
  vote_count: 0,
  release_date: "",
  poster_path: "",
  overview: "",
  budget: 0,
  revenue: 0,
  runtime: 0,
  genres: [],
  id: uuidv4(),
};

const AddMovieForm = () => {
  const router = useRouter();
  const handleSubmit = (formValue) => {};
  return (
    <Dialog
      title={"ADD MOVIE"}
      onClick={() => {
        router.push(`/`);
      }}
      content={<MovieForm movie={initialMovieState} onSubmit={handleSubmit} />}
    />
  );
};
export default AddMovieForm;
