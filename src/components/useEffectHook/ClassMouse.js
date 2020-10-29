import React, { Component } from "react";

class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  logMouse = (e) => {
    // console.log("State Change");
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    // console.log("CDM");
    window.addEventListener("mousemove", this.logMouse);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMouse);
  }
  render() {
    // console.log("Render");
    return (
      <div>
        <h2>X: {this.state.x}</h2>
        <h2>Y: {this.state.y}</h2>
      </div>
    );
  }
}

export default ClassMouse;
