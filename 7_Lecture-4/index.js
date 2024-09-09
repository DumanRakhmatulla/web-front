// const login = prompt("Кто вы?");
// const age = prompt("Age?");
// let message =
//   login == "Сотрудник" ? "Привет" : login == "Директор" ? "Здраствуите" : "";

// alert(message);

// const user = prompt("Кто вы?");
// const html = `<div>Hello, ${user}</div>`;
// document.write(html);

const fruites = {
  apples: 2,
  stroubery: 1,
};

const veg = {
  carrots: 3,
};

const { apples } = fruites;
const { carrots } = veg;

const FruintAndVeg = { ...fruites, ...veg };
console.log(FruintAndVeg);
