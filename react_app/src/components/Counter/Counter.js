import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement;

export class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  onClickDecrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  onClickIncrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };

  render() {
    return element(
      "div",
      { style: { backgroundColor: "coral", padding: "20px" } },
      element("button", { onClick: this.onClickIncrement }, "Increment"),
      element("h1", null, `${this.state.counter}`),
      element("button", { onClick: this.onClickDecrement }, "Decrement")
    );
  }
}
