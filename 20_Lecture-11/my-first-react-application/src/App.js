import React from "react";
import "./App.css";
import Header from "./components/Header";

const FieldfuncstionComponenet = () => {
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

class FieldClassComponent extends React.Component {
  constructor() {
    super();
    this.name = "Field1";
    this.surname = "Field1";
    this.age = "Field1";
  }

  clickMe() {
    const { name, surname, age } = this;
    console.log("You clicked me", name);
  }

  render() {
    const holder = "Enter here";
    return <input placeholder={holder} type="text" />;
  }
}

function App() {
  const logged = false;
  const ButtonLoggedText = "nFactorial";
  const ButtonNotLoggedText = "You not logged";

  return (
    <div className="App">
      {}
      <Header />
      <p>{logged ? ButtonLoggedText : ButtonNotLoggedText}</p>
      <FieldfuncstionComponenet />
      <FieldClassComponent />
    </div>
  );
}

export default App;
