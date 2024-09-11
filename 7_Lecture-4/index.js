// const login = prompt("Кто вы?");
// const age = prompt("Age?");
// let message =
//   login == "Сотрудник" ? "Привет" : login == "Директор" ? "Здраствуите" : "";

// alert(message);

// const user = prompt("Кто вы?");
// const html = `<div>Hello, ${user}</div>`;
// document.write(html);

// const fruites = {
//   apples: 2,
//   stroubery: 1,
// };

// const veg = {
//   carrots: 3,
// };

// const { apples } = fruites;
// const { carrots } = veg;

// const FruintAndVeg = { ...fruites, ...veg };
// console.log(FruintAndVeg);

///--------------
// Function

// ------------
// Array methods
//-------------

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array.length);
// array[array.length] = 5;

// array.push(100); // довавляеть последный элемент
// console.log(array);
// array.pop(); // удаляет последный элемент
// console.log(array);
// array.shift(); // удаляет первый элемент
// console.log(array);
// array.unshift(100); // довавляеть первый элемент

// let arr = [];
// const s = "Aruzhan Samat Duman Ospan";
// arr = s.split(" ");
// console.log(arr);

// let array1 = [1, 12, 26, 25, 7, 6];
// console.log(array1.sort()); // 1 12 25 26 6 7
// array1.sort((a, b) => a - b);
// console.log(array1); // 1 6 7 12 25 26

// const num = array1.find((item) => item === 13);
// console.log(num);

// ---------
// transform
// ----------

const data = ["a", "b", "caaaa", "da5rea"];

// for(let i =0; i < )
// for(let key in data)
// for(let key of data)

// data.forEach(function (item) {
//   console.log(item);
// });

const data1 = data.map((item) => {
  if (item.includes("a")) {
    return "a";
  }
  return item;
});

console.log(data1);

const data2 = data1.filter((item) => item === "a");
console.log(data2);

const data3 = data.some((item) => (item === "b" ? item : ""));
console.log(data3);

// const data4 = data.every((item)=>
//     return item = '';
// )
