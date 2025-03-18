import React, { Component } from "react";

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <h1>Class {this.props.name}</h1>
      </div>
    );
  }
}

Ccomponent.defaultProps = { name: "Alexey" };
