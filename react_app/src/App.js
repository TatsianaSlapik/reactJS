import { Route, Routes } from "react-router-dom";
import "./App.css";

import MovieListPage from "./pages/MovieListPage/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import AddMovieForm from "./pages/AddMovieForm/AddMovieForm";
import EditMovieForm from "./pages/EditMovieForm/EditMovieForm";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MovieListPage />}></Route>
        <Route path=':movieId' element={<MovieDetailsPage />}></Route>
        <Route path=':movieId/edit' element={<EditMovieForm />}></Route>
        <Route path='/new' element={<AddMovieForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
