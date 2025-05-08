import React from "react";

import "./App.css";

import Quotes from "./components/Quotes";
import Actions from "./components/Actions";

import quotesData from "./data/quotes.json";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const generateRandom = () => {
  const randomQuoteIndex = Math.floor(Math.random() * quotesData.quotes.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);

  const quote = {
    author: quotesData.quotes[randomQuoteIndex].author,
    quote: quotesData.quotes[randomQuoteIndex].quote,
    color: colors[randomColorIndex],
  };

  return quote;
};

// const randomQuote = Math.floor(Math.random() * quotesData.quotes.length);
// console.log(randomQuote);
class App extends React.Component {
  state = {
    quote: generateRandom(),
  };

  generateRandomQuote = () => {
    this.setState({ quote: generateRandom() });
  };

  render() {
    // this.generateRandomQuote();
    // console.log(this.state.quote);
    return (
      <div
        style={{
          backgroundColor: this.props.color,
        }}
        className="App"
      >
        <div className="quotes-container">
          <Quotes
            author={this.state.quote.author}
            quote={this.state.quote.quote}
          />

          <hr />
          <Actions generateRandomQuote={this.generateRandomQuote} />
        </div>
      </div>
    );
  }
}

export default App;
