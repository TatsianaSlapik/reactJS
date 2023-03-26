import { fireEvent, render, screen } from "@testing-library/react";
import GenreSelect from "./GenreSelect";

export const mockedGenres = [
  { id: 0, genre: "All" },
  { id: 1, genre: "Documentary" },
  { id: 2, genre: "Comedy" },
  { id: 3, genre: "Horror" },
  { id: 4, genre: "Crime" },
];
const mockedGenre = "All";

test("that component renders all genres passed in props", () => {
  render(<GenreSelect genres={mockedGenres} />);

  const btnElement = screen.getAllByRole("button");

  expect(btnElement.length).toBe(5);
});

test("that component highlights a selected genre passed in props", () => {
  const onChange = jest.fn().mockImplementation(() => mockedGenre);

  render(<GenreSelect genres={mockedGenres} onSelect={onChange} />);

  const btnElement = screen.getByText("All");
  fireEvent.click(btnElement);

  expect(btnElement).toHaveClass("active");
  expect(btnElement.classList.contains("active")).toBe(true);
});

test("that after a click event on a genre button component calls onChange callback and passes correct genre in arguments", () => {
  const onChange = jest.fn().mockImplementation(() => mockedGenre);

  render(<GenreSelect genres={mockedGenres} onSelect={onChange} />);

  const btnElement = screen.getByText("All");
  fireEvent.click(btnElement);

  expect(onChange()).toEqual(mockedGenre);
  expect(btnElement).toBeInTheDocument();
});
