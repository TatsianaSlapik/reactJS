import { Route, Routes } from "react-router-dom";
import "./App.css";

import MovieListPage from "./pages/MovieListPage/MovieListPage";

import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MovieListPage />}></Route>
        <Route path=':movieId' element={<MovieDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
