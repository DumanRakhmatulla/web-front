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
// let arr = [2, 1, 3, 4, -5];
// // alert(arr);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];
// // console.log(users);
// // console.log(users.name);

// let names = users.map((user) => user.name);
// alert(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));
// /* ... ваш код ... */
// // usersMapped = [
// //   { fullName: "Вася Пупкин", id: 1 },
// //   { fullName: "Петя Иванов", id: 2 },
// //   { fullName: "Маша Петрова", id: 3 },
// // ];

// // console.log(usersMapped.fullName);

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
