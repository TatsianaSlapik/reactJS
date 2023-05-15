import MovieDetails from "../src/components/MovieDetails/MovieDetails";
import { useRouter } from "next/router";

export default function Movie({ movie }) {
  const router = useRouter();

  return (
    <MovieDetails
      movie={movie}
      onClick={() => {
        router.push(`/`);
      }}
    />
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:4000/movies/${params.id}`);

  const movie = await response.json();

  return {
    props: { movie },
  };
}
