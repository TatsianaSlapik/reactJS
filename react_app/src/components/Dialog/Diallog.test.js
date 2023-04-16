import { fireEvent, render, screen } from "@testing-library/react";
import Dialog from "./Dialog";

const mockedTitle = "ADD MOVIE";
const mockedContent = <div>{mockedTitle}</div>;

test("that component renders movie name passed in title props", () => {
  render(<Dialog title={mockedTitle} />);

  const hElement = screen.getByText(`${mockedTitle}`);

  expect(hElement).toBeInTheDocument();
});

test("that component renders content passed in props", () => {
  render(<Dialog content={mockedContent} />);

  const divElement = screen.getByText(`${mockedTitle}`);

  expect(divElement).toBeInTheDocument();
});

test("clicking the button triggers the onClick function", () => {
  const onClick = jest.fn();
  render(<Dialog onClick={onClick} />);

  const btnElement = screen.getByText("x");
  btnElement.click();

  expect(onClick).toHaveBeenCalled();
});
