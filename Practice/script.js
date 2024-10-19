//  Синхронный код, выполняющийся сразу
// console.log("Начало программы");

// Асинхронная операция с использованием setTimeout
// setTimeout(() => {
//   console.log("Асинхронная задача выполнена");
// }, 2000); // Задержка в 2 секунды

// Синхронный код, выполняющийся сразу
// console.log("Конец программы");

// Promise - Специалный объект-надстройка
// для работы с асинхронным кодом

// Promise имеет 3 состояния:
// pending - ожидание, ucходное состояние
// fulfilled - выполнено успешно, получен результат
// rejected - выполнено с ошибкой

// Основные методы Promise:
// then() - обрабатывает fulfilled состояние
// catch() - обрабтывает rejected состояние

const promise = new Promise((fulfill, reject) => {
  console.log("Начало, состояние pending...");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill("Ура, состояние fulfilled ");
    } else {
      reject("Увы, состояние rejected ");
    }
  }, 1000);
});

promise
  .then((successDat) => {
    console.log("Успех! получено данные: ", successDat);
  })
  .catch((errorData) => {
    console.log("Ошибка. Получены данные: ", errorData);
  });
