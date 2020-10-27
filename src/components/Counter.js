import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.counter} times.
        </button>
      </div>
    );
  }
}

export default Counter;
