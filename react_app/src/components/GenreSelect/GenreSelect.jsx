import { useState } from "react";
import "./GenreSelect.css";

const GenreSelect = ({ genres }) => {
  const [value, setValue] = useState("");

  return (
    <div className='genre'>
      <ul className='list'>
        {genres.map((genre) => (
          <a key={genre.genre} href='/' className='link'>
            {genre.genre}
          </a>
        ))}
      </ul>
    </div>
  );
};
export default GenreSelect;
