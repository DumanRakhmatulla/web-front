// Создать функцию `placeABomb` которая должна взорваться через 2 секунды с текстом "BANG!"
// Взрыв должен быть в `reject`
// Метод `catch` должен переписать глобальную переменную `window.plans.planB=true;`

const placeABomb = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("BANG!");
    }, time);
  });
};

placeABomb(2000).catch((e) => {
  console.error(e);
  console.log(e);
  window.plans.planB = true;
});
