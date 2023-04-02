import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

const mockedInitialValue = 0;
const mockedInitialValuePlusOne = 1;
const mockedInitialValueMinusOne = -1;

test("component renders initial value provided in props", () => {
  render(<Counter />);

  const h1Element = screen.getByText(`${mockedInitialValue}`);

  expect(h1Element.textContent).toEqual(`${mockedInitialValue}`);
  expect(h1Element).toBeInTheDocument();
});

test("that click event on decrement button decrements the displayed value", () => {
  render(<Counter />);

  const btnDecrementElement = screen.getByText("Decrement");
  fireEvent.click(btnDecrementElement);

  const h1Element = screen.getByText(`${mockedInitialValuePlusOne}`);

  expect(h1Element.textContent).toEqual(`${mockedInitialValuePlusOne}`);
  expect(h1Element).toBeInTheDocument();
});

test("that click event on increment button increments the displayed value", () => {
  render(<Counter />);

  const btnIncrementElement = screen.getByText("Increment");
  fireEvent.click(btnIncrementElement);

  const h1Element = screen.getByText(`${mockedInitialValueMinusOne}`);

  expect(h1Element.textContent).toEqual(`${mockedInitialValueMinusOne}`);
  expect(h1Element).toBeInTheDocument();
});
