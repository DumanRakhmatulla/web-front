const sayHello = () => {
  console.log("Hello");
};

// setTimeout(sayHello, 5000);

// setTimeout(function () {
//   console.log("Timeout1");

//   setTimeout(console.log("Timeout2"), 500);
// }, 1000);

// setInterval(function () {
//   alert("Hi Duman");
// }, 2000);

// const timeout = setInterval(function () {
//   alert("two second!!!");
// }, 2000);

// setTimeout(() => {
//   clearInterval(timeout);
//   alert("stoped timeout");
// }, 10000);

// function first() {
//   setTimeout(console.log("first"), 1000);
// }

// function second() {
//   console.log("second");
// }

// first();
// second();

// function learn(lesson, callback) {
//   setTimeout(() => {
//     console.log(`Сегодня мы проходим ${lesson}`);
//     callback();
//   });
// }

// function link() {
//   console.log("И мне это нравится");
// }

// learn("Callback", link);

const request = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Данныйе подготовка");

    const product = {
      name: "Phone",
      price: 5000,
    };

    console.log("Данные подготовка отправляем ия на фронтенд");
    console.log(product);
    resolve(product);
  });
}).catch(() => {
  console.log("error Duman");
});

request.then((product) => {
  console.log("our product!", product);
  const request2 = new Promise(function (resolve, reject) {
    console.log("Данные перезагрузить с другом сервера");
    const error = true;
    if (error) {
      reject();
    }
    product.model = "phone 16 pro max";
  });
  request2
    .then((e) => {
      console.log(e, "Произашло некоторы ошибка");
    })
    .catch(() => {
      console.log("Произошло ошибка");
    });
});
