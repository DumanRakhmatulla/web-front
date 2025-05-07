import React from "react";

import "./style.css";

export default class Button extends React.Component {
  handleClick = () => {
    if (this.props.link) {
      window.location.href = this.props.link;
    } else {
      console.log("This is quote");
    }
  };
  render() {
    const { children, style } = this.props;
    return (
      <button
        style={{
          backgroundColor: "#16a085",
          ...style,
        }}
        className="button"
        onClick={() => this.handleClick()}
      >
        {children}
      </button>
    );
  }
}
