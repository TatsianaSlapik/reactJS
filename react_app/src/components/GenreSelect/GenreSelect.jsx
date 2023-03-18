import { useState } from "react";
import Button from "../Button/Button";

import "./GenreSelect.css";

const GenreSelect = ({ genres, onSelect }) => {
  const [nameGenreSelected, setNameGenreSelected] = useState("");

  return (
    <div className='genre'>
      <ul className='list'>
        {genres.map((genre) => (
          <Button
            key={genre.id}
            newStyle={nameGenreSelected === genre.genre ? "active" : " "}
            onClick={() => {
              setNameGenreSelected(genre.genre);
              onSelect(genre.genre);
            }}
            name={genre.genre}
          />
        ))}
      </ul>
    </div>
  );
};
export default GenreSelect;
