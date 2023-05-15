import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MovieTile from "./MovieTile";

export const mockedFilm = {
  id: "1",
  img: "Film1",
  name: "Pulp Fiction",
  years: "1994",
  genre: "Action & Adventure",
  rating: "8.9",
  time: "2h 34min",
  description:
    "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
};

test("that component renders movie name passed in props", () => {
  render(<MovieTile movie={mockedFilm} />);

  const h1Element = screen.getByText(`${mockedFilm.name}`);
  expect(h1Element.textContent).toEqual(`${mockedFilm.name}`);

  expect(h1Element).toBeInTheDocument();
});

test("that component renders movie years  passed in props", () => {
  render(<MovieTile movie={mockedFilm} />);

  const pElement = screen.getByText(`${mockedFilm.years}`);

  expect(pElement.textContent).toEqual(`${mockedFilm.years}`);
  expect(pElement).toBeInTheDocument();
});

test("that component renders movie genre  passed in props", () => {
  render(<MovieTile movie={mockedFilm} />);

  const pElement = screen.getByText(`${mockedFilm.genre}`);

  expect(pElement.textContent).toEqual(`${mockedFilm.genre}`);
  expect(pElement).toBeInTheDocument();
});
