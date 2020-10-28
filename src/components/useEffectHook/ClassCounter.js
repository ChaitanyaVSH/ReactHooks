import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <h1>Plain Class Counter</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click here: {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
