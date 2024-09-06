const cName = "RayimbekN";

const cAddress = "Astana";

const pickle = {
  id: 1,
  price: 200,
  name: "pickle",
  color: "green",
  type: "vegetable",
  isEatable: true,
  amount: 10000,
};

const apple = {
  id: 2,
  price: 300,
  name: "apple",
  type: "fruit",
  weight: 10,
  isEatable: true,
  amount: 20000,
};

let merged = {};

console.log(pickle);

// for (let key in pickle) {
//   merged[key] = pickle[key];
// }
// for (let key in apple) {
//   merged[key] = apple[key];
// }

merged = { ...pickle, ...apple };

console.log(merged);
