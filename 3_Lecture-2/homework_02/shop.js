"use strict";

// alert("Welcome to our Restarant");
const ShopName = "ComeON";
let admin = "Duman";

let waiter = [
  {
    name: "Symbat",
    surname: "Alihan",
    age: 22,
  },
  {
    name: "Zhenis",
    surname: "Alhan",
    age: 21,
  },
  {
    name: "Diana",
    surname: "Berkasim",
    age: 23,
  },
];

var products = [
  {
    product: "Apple",
    price: 180,
  },
  {
    product: "Kurydak",
    price: 1350,
  },
];

console.log(products);
delete products[1];
console.log(delete products["Kurydak"]);
