"use strict";

// Interation with user

// alert("Hello user!");

// let userAnswer = confirm("Тебе есть 18", "");
// console.log(userAnswer);

// let userCity = prompt("С какого ты города?", "Алматы");
// console.log(typeof userCity);

//
let a = 15;
console.log(a, typeof a);
console.log(typeof String(a));
console.log("1" + 5);

let value = true;
value = String(value);
console.log(value, typeof value);
console.log(typeof Number(value), Number(value));

////  Type conversions

let string = "Hello world";
console.log(Number(string), typeof Number(string));
console.log("5" / "2");
console.log("5" - "2");
console.log(typeof "5" % "2"); //NaN
console.log(typeof Number("5" + 1));
console.log(Number("123x"));
console.log(Number("true")); //NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); //NaN

console.log(Boolean(1)); //true
console.log(Boolean(12312)); //true
console.log(Boolean(0)); //false
console.log(Boolean("Hello world")); // true
console.log(Boolean("")); //false
console.log();

////  Operators: Math

console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);
console.log(9 ** (1 / 2)); // 3

let inc = 10,
  dec = 10;

// inc++
// dec--

// postfix
console.log(inc++); //10
console.log(inc); //11
console.log(dec--); //10
console.log(dec); //9
// prefix
//inc = 11 dec = 9
console.log(++inc); //12
console.log(--dec); //8

// Comparisons
console.log(8 > 9);
console.log(8 < 9);
console.log(9 == 9);
console.log(9 === 9); //true
console.log(9 === "9"); // false
console.log("ada" == "aad");
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == 0); //false

console.log(9 != 9); //false
console.log(9 !== 9); // false
console.log(9 > 1 + 2);
console.log("10" <= "11");
console.log("Duman" > "Ospan"); //false
console.log("Ar" > "Ak"); // true
