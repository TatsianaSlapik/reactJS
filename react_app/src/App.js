import "./App.css";
import { Counter } from "./components/Counter/Counter";
import Dialog from "./components/Dialog/Dialog";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieForm from "./components/MovieForm/MovieForm";
import MovieTile from "./components/MovieTile/MovieTile";
import { FILMS_DATA } from "./data/data";

function App() {
  return (
    <div className='App'>
      <Counter />
      <Header />
      <Menu />

      <MovieTile
        movie={FILMS_DATA[0]}
        onClick={() => {
          console.log("Movie");
        }}
      />
      <MovieDetails movie={FILMS_DATA[0]} />
      <Dialog title='add' onClick={() => {}} content={<MovieForm />} />
    </div>
  );
}

export default App;
