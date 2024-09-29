"use strict";

//JSON

const user = {
  name: "Duman",
  username: "Rakhmatulla",
  age: 18,
  number: "+77763537764",
};

console.log(user);
console.log(JSON.stringify(user));

const response = JSON.stringify(user);
console.log(JSON.parse(response));

// Копирование обектов
const person1 = JSON.parse(response);
person1.name = "Samat";
console.log(user);
console.log(person1);
