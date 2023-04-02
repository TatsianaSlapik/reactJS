import "./App.css";
import { Counter } from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieTile from "./components/MovieTile/MovieTile";
import { FILMS_DATE } from "./data/data";

function App() {
  return (
    <div className='App'>
      <Counter />
      <Header />
      <Menu />

      <MovieTile
        movie={FILMS_DATE[0]}
        onClick={() => {
          console.log("Movie");
        }}
      />
      <MovieDetails movie={FILMS_DATE[0]} />
    </div>
  );
}

export default App;
