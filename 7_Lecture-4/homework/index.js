// firstTask

// function CheckAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   confirm("Родители разрешили");
// }

// console.log(CheckAge());

// let f = pow(4, 2);
// console.log(pow(3, 3));
let arr = [2, 1, 3, 4, -5];
// alert(arr);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
// console.log(users);
// console.log(users.name);

let names = users.map((user) => user.name);
alert(names);
