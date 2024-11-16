import React from "react";
import "./App.css";
import Header from "./components/Header";

// const FieldfuncstionComponenet = () => {
//   const Admin = false;
//   const holder = "Enter here";
//   const styleFieldAdmin = { width: "300px", backgroundColor: "red" };
//   const styleFieldUser = { width: "200px", backgroundColor: "green" };
//   return (
//     <input
//       placeholder={holder}
//       type="text"
//       style={Admin ? styleFieldAdmin : styleFieldUser}
//     />
//   );
// };

// class FieldClassComponent extends React.Component {
//   constructor() {
//     super();
//     this.name = "Field1";
//     this.surname = "Field1";
//     this.age = "Field1";
//   }

//   clickMe() {
//     const { name, surname, age } = this;
//     console.log("You clicked me", name);
//   }

//   render() {
//     const holder = "Enter here";
//     return <input placeholder={holder} type="text" />;
//   }
// }

function Person(props) {
  console.log(props);
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <a href={props.link} />
    </div>
  );
}

function App() {
  const logged = false;
  const ButtonLoggedText = "nFactorial";

  const users = [
    {
      id: 1,
      name: "Duman",
      link: "inst.com",
    },
    {
      id: 2,
      name: "Dauren",
      link: "inst.com",
    },
    {
      id: 3,
      name: "Ernur",
      link: "facebook.com",
    },
  ];

  return (
    <div className="App">
      <Header />
      {users.map((item, index) => (
        <Person key={index} name={item.name} link={item.link} />
      ))}

      {/* <FieldfuncstionComponenet />
      <FieldClassComponent /> */}
    </div>
  );
}

export default App;
