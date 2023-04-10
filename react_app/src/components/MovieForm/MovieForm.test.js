import { fireEvent, render, screen } from "@testing-library/react";

import MovieForm from "./MovieForm";

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

test("that component renders movie name passed in movie props", () => {
  render(<MovieForm movie={mockedFilm} />);

  const inputElement = screen.getByDisplayValue(`${mockedFilm.name}`);

  expect(inputElement).toBeInTheDocument();
});

test("that component renders movie description passed in movie props", () => {
  render(<MovieForm movie={mockedFilm} />);

  const inputElement = screen.getByDisplayValue(`${mockedFilm.description}`);

  expect(inputElement).toBeInTheDocument();
});

test("that component renders have all genres", () => {
  render(<MovieForm />);

  const optionElement = screen.getAllByRole("option");

  expect(optionElement.length).toBe(6);
});

test("clicking the button triggers the onSubmit function", () => {
  const onSubmit = jest.fn();
  render(<MovieForm onSubmit={onSubmit} />);

  const btnElement = screen.getByText("SUBMIT");
  fireEvent.submit(btnElement);

  expect(onSubmit).toHaveBeenCalled();
});
