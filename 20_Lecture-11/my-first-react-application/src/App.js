import React from "react";
import "./App.css";
import Header from "./components/Header";

const Field = () => {
  const Admin = false;
  const holder = "Enter here";
  const styleFieldAdmin = { width: "300px", backgroundColor: "red" };
  const styleFieldUser = { width: "200px", backgroundColor: "green" };
  return (
    <input
      placeholder={holder}
      type="text"
      style={Admin ? styleFieldAdmin : styleFieldUser}
    />
  );
};

function App() {
  const logged = false;
  const ButtonLoggedText = "nFactorial";
  const ButtonNotLoggedText = "You not logged";

  return (
    <div className="App">
      {}
      <Header />
      <p>{logged ? ButtonLoggedText : ButtonNotLoggedText}</p>
      <Field />
    </div>
  );
}

export default App;
