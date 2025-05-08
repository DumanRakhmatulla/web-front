import React from "react";

import "./style.css";

export default class Button extends React.Component {
  handleClick = () => {
    if (this.props.link) {
      window.location.href = this.props.link;
    } else {
      this.props.generateRandomQuote();
    }
  };
  render() {
    const { children, style } = this.props;
    return (
      <button
        style={{
          backgroundColor: this.props.color,
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
