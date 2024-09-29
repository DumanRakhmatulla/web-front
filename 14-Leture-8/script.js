"use strict";

//JSON

const user = {
  name: "Duman",
  username: "Rakhmatulla",
  age: 18,
  number: "+77763537764",
};

// console.log(user);
// console.log(JSON.stringify(user));

const response = JSON.stringify(user);
// console.log(JSON.parse(response));

// Копирование обектов
const person1 = JSON.parse(response);
person1.name = "Samat";
// console.log(user);
// console.log(person1);

//XMLHttpRequest
const inputUSD = document.querySelector("#usd"),
  inputKZT = document.querySelector("#kzt");

// inputKZT.addEventListener("input", () => {
//   //   console.log("KZT works!");
//   const request = new XMLHttpRequest();
//   request.open("GET", "./data.json");
//   request.setRequestHeader("Content-type", "app/json");
//   request.send();

//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.response);
//       const data = JSON.parse(request.response);
//       console.log(data);
//       inputUSD.value = +inputKZT.value * data.current.usd;
//     } else {
//       inputUSD.value = "Error";
//     }
//   });
// });

inputKZT.addEventListener("input", async () => {
  let response = await fetch("./data.json");

  if (response.ok) {
    const data = await response.json();
    inputUSD.value = +inputKZT.value / data.current.usd;
  }
});
