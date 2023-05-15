import "../src/index.css";
import HeaderImg from "../src/img/header.png";
import Search from "../src/components/Search/Search";
import Image from "next/image";
import "../src/pages/MovieListPage/MovieListPage.css";
import "../src/components/MovieTile/MovieTile.css";
import "../src/components/GenreSelect/GenreSelect.css";

import SortControl from "../src/components/SortControl/SortControl";
import { genres } from "../src/data/data";
import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Button from "../src/components/Button/Button";

export default function Index({ movieList }) {
  const router = useRouter();

  const [params, setParams] = useState({
    search: "",
    searchBy: "title",
    filter: "All",
  });

  const handleSearch = (value) => {
    setParams({ search: value, ...params });
    router.push(`?query=${value}`);
  };

  const handleClick = () => {
    router.push(`/addNew`);
  };

  const handleChangeGenreSelect = (par) => {
    setParams({ ...params, filter: par });
    router.push(`?genre=${par === "All" ? "" : par}`);
  };

  const handleChangeSortControl = (event) => {
    setParams({ ...params, sortBy: event.target.value });
    router.push(`?sortBy=${event.target.value}`);
  };

  return (
    <>
      <header className='header'>
        <>
          <Image src={HeaderImg} alt='header' />
          <Search onSearch={handleSearch} onClick={handleClick} />
        </>
      </header>
      <div className='menu'>
        <div className='genre'>
          <ul className='list' data-testid='list'>
            {genres.map((genre) => (
              <Link
                key={genre.id + genre.title}
                href={`?genre=${genre.genre === "All" ? "" : genre.genre}`}
              >
                <Button
                  key={genre.id}
                  newStyle={params.filter === genre.genre ? "active" : " "}
                  onClick={() => {
                    handleChangeGenreSelect(genre.genre);
                  }}
                  name={genre.genre}
                />
              </Link>
            ))}
          </ul>
        </div>

        <SortControl
          activeSortControl={params.searchBy}
          onChange={(event) => {
            handleChangeSortControl(event);
          }}
        />
      </div>
      <div className='movies'>
        {movieList?.map((movie) => (
          <Link key={movie.id + movie.title} href={`/${movie.id}`}>
            <div className='film'>
              <div className='film' key={movie.id} onClick={() => {}}>
                <img
                  className='film-img'
                  src={movie.poster_path}
                  alt={movie.title}
                />
                <div className='film-description'>
                  <p className='film-title'>{movie.title}</p>
                  <div className='film-date'>
                    <p>{movie.release_date.slice(0, 4)}</p>
                  </div>
                  <p className='film-genre'>{movie.genres.join(",")}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  const response = await fetch(
    `http://localhost:4000/movies?searchBy=${query.sortBy ?? ""}&search=${
      query.query ?? ""
    }&filter=${query.genre ?? ""}`
  );

  const { data } = await response.json();
  const movieList = data;
  return {
    props: { movieList },
  };
}
