"use strict";

let customer = "Ansar";
customer = "Ernar";
customer = "Samat";

// console.log(customer);

alert("hello ${name}"); // Бөлек бет шығару

const shopName = `Aroos shop customer's ${customer}`; // const - константа

// console.log(shopName);

var d = "Duman"; // старый
let a = "Duman"; // новый

//Data Types

//numbers
let age = 47;
const YEAR = 2022;
// console.log(YEAR * "nfactorial"); //NaN
// console.log(-25 / 0); //Infinity

//Strings
const name = "Aruzhan";
const surname = "Aitbay";
const city = "Almaty";

//Boolean
const isTeacher = true;

// null
let country = null;

//undefined
let earth;
// console.log(earth); //undefined
earth = "Земля";
// console.log(earth);

//Object

const user = {
  name: "Samat",
  isMentor: true,
  age: 28,
  friends: {
    first: "Aruzhan",
    second: "Alhan",
  },
};
// console.log(user.name, user.age);

user.age = 18;
// console.log(user);

const user1 = {
  name: "Dalia",
  age: 18,
  isMentor: false,
  phoneNumber: "+7777892",
};
// console.log(user1.name, user1["phoneNumber"]);
// console.log(user1["name"], user1["phoneNumber"]);

// Adding to Object
user.isAnimeLover = true;
user1["isAnimeLover"] = false;
// console.log(user);
// console.log(user1);

// Delete from Object
delete user.friends;
delete user1["phoneNumber"];
// console.log(user);
// console.log(user1);

//Iterate Object
for (let key in user) {
  //   console.log(key, ":", user[key]);
}

//Arrays
const salaries = [100, 101, 102, 103];
const students = ["Aruzhan", "Aliya", "Akmaral"];

console.log(salaries[4]);
console.log(students.length);
