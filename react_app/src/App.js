import "./App.css";
import { Counter } from "./components/Counter/Counter";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import Header from "./components/Header/Header";
import { genres } from "./data/data";

function App() {
  return (
    <div className='App'>
      <Counter />
      <Header />
      <GenreSelect
        genres={genres}
        onSelect={(value) => {
          alert(value);
        }}
      />
    </div>
  );
}

export default App;
