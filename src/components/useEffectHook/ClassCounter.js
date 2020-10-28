import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === this.state.count) {
      console.log("Not updating");
      return false;
    }
    console.log("Props: " + prevProps);
    console.log("State: " + prevState);
    console.log("Updating doc title");
    document.title = `Clicked ${this.state.count} times`;
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Plain Class Counter</h1>
        <input type="text" name="username" onChange={this.handleChange} />
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
