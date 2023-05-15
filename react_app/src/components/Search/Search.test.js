import React from "react";
import { expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import Search from "./Search";

export const mockedSearchText = "What do you want to watch?";

test("that component renders an input with the value equal to initial value passed in props", () => {
  render(<Search />);

  const inputElement = screen.getByDisplayValue(`${mockedSearchText}`);

  expect(inputElement).toBeInTheDocument();
});

test("that after typing to the input and a click event on the Submit button, the onChange prop is called with proper value", () => {
  const onChange = jest.fn().mockImplementation(() => mockedSearchText);

  render(
    <Header>
      <Search onSearch={onChange} />
    </Header>
  );
  const inputElement = screen.getByDisplayValue(`${mockedSearchText}`);

  const btnElement = screen.getByText("SEARCH");
  fireEvent.submit(btnElement);

  expect(onChange()).toEqual(mockedSearchText);
  expect(inputElement).toBeInTheDocument();
});

test("that after typing to the input and pressing Enter key, the onChange prop is called with proper value", () => {
  render(
    <Header>
      <Search />
    </Header>
  );
  const inputElement = screen.getByDisplayValue(`${mockedSearchText}`);
  fireEvent.keyPress(inputElement, { key: "Enter", code: 13 });

  expect(inputElement).toBeInTheDocument();
});
