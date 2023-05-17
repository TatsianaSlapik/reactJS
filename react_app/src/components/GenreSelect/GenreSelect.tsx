import { useState } from "react";
import Button from "../Button/Button";

import "./GenreSelect.css";

const GenreSelect = ({ genres, activeGenre, onGenreSelect }) => {
  const [nameGenreSelected, setNameGenreSelected] = useState(activeGenre);

  return (
    <div className='genre'>
      <ul className='list' data-testid='list'>
        {genres.map((genre) => (
          <Button
            key={genre.id}
            newStyle={nameGenreSelected === genre.genre ? "active" : " "}
            onClick={() => {
              setNameGenreSelected(genre.genre);
              onGenreSelect(genre.genre);
            }}
            name={genre.genre}
          />
        ))}
      </ul>
    </div>
  );
};
export default GenreSelect;
