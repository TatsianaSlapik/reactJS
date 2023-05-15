import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import SortControl from "./SortControl";

const mockedName = "Sort by";
const mockedOptions = {
  date: "Release Date",
  title: "Title",
};

test("that component have label", () => {
  render(<SortControl />);

  const labelElement = screen.getByText(`${mockedName}`);

  expect(labelElement.textContent).toEqual(`${mockedName}`);
  expect(labelElement).toBeInTheDocument();
});

test("that select have options", () => {
  render(<SortControl />);

  const optionsElement = screen.getByText(`${mockedOptions.date}`);
  const options2Element = screen.getByText(`${mockedOptions.title}`);

  expect(optionsElement.textContent).toEqual(`${mockedOptions.date}`);
  expect(optionsElement).toBeInTheDocument();

  expect(options2Element.textContent).toEqual(`${mockedOptions.title}`);
  expect(options2Element).toBeInTheDocument();
});
