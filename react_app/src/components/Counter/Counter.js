import React from "react";
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
    return React.createElement(
      "div",
      { style: { backgroundColor: "#f65261", padding: "20px" } },
      React.createElement(
        "button",
        { onClick: this.onClickIncrement },
        "Increment"
      ),
      React.createElement("h1", null, `${this.state.counter}`),
      React.createElement(
        "button",
        { onClick: this.onClickDecrement },
        "Decrement"
      )
    );
  }
}
