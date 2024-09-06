let vehicle = [];

vehicle.brandName = "BMW";
vehicle.model = "X5";

vehicle.model = "M1";

delete vehicle.model;

console.log(vehicle);

let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

for (key in salaries) {
  console.log("Name is", key, "and salarie is", salaries[key]);
}
