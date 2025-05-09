import React from "react";

import "./style.css";

import { ReactComponent as TwitterSVG } from "../../assets/twitter.svg";
import { ReactComponent as TumblrSVG } from "../../assets/tumblr.svg";

import Button from "../../UI/Button";

export default class Actions extends React.Component {
  render() {
    return (
      <div className="actions">
        <div className="links">
          <Button
            color={this.props.color}
            style={{ marginRight: "1rem" }}
            link={"https://x.com/"}
          >
            <TwitterSVG fill={"white"} width={10} height={10} />
          </Button>
          <Button color={this.props.color} link={"https://www.tumblr.com/"}>
            <TumblrSVG fill={"white"} width={10} height={10} />
          </Button>
        </div>
        <Button
          color={this.props.color}
          link={""}
          generateRandomQuote={this.props.generateRandomQuote}
        >
          New Quote
        </Button>
      </div>
    );
  }
}
