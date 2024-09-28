// Создать функцию `leaveFast`, которая
// после двух секунд должна вернуть в resolve "leave the bank in 2 seconds"
// и после 4 секунд должна вернуть в resolve "close the road in 4 seconds"
// Если два условия выполнены вывести в консоль "we almost did it!" и
// переписать глобальную переменную `window.plans.planC=true;`

function leaveFast(message, time) {
  return new Promise((res, rej) => {
    setTimeout(() => res(message), time);
  });
}

Promise.all([
  leaveFast("leave the bank in 2 seconds", 2000),
  leaveFast("close the road in 4 seconds", 4000),
])
  .then((res) => {
    console.log("we almost did it!", res);
  })
  .then(() => {
    window.plans.planC = true;
  });
