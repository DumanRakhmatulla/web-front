// Task 1
// Используя условный (тернарный) оператор перенаправьте
// сайт на "https://google.com/" если ваш браузер Safari или Chrome
// иначе перенаправьте на "https://wikipedia.org/"
// location.href = navigator.userAgent.includes("Chrome") ? "https://google.com/" : "https://wikipedia.org/";

// navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Safari")
//   ? (location.href = "https://google.com/")
//   : (location.href = "https://wikipedia.org/");

// Task 2
// создайте 4 новых <li> </li> вложенных в существующий ul
// присвойте каждому li любой текст, тексты должны отличаться
// присвойте каждому li новый class = list-element

// document.getElementById(
//   "myUL"
// ).innerHTML = `<li class = "list-element">asdf</li>
//                 <li class = "list-element">qwer</li>
//                 <li class = "list-element">zxcv</li>
//                 <li class = "list-element">uiop</li>`;
// let arr = ['asdf', 'qwer','iopp','zxcv'];
// for(let i = 0; i<4; i++){
//     const newElement = document.createElement("li");
//     newElement.innerHTML = arr[i];
//     document.getElementById("myUL").append(newElement);
// }

// Task 3
// Вложите в каждый <li> новый тэг <span>
// Вложите в каждый созданный <span> текст "close"
// Присвойте всем <span> новый класс = "close"
// IMPORTANT NOTE! Для вложения текста используйте createTextNode DOM tree- node
// let arr = ['asdf', 'qwer','iopp','zxcv'];
// for(let i = 0; i<4; i++){
//     const span = document.createElement("span");
//     span.textContent = "CLOSE";
//     span.className = "close";
//     const newElement = document.createElement("li");
//     newElement.innerHTML = arr[i];
//     newElement.className = 'list-element';
//     newElement.append(span);
//     document.getElementById("myUL").append(newElement);
// }

// Task 4
// Используя только DOM и JS, если размер экрана меньше 740px
// "отпустите" кнопку вниз красной шапки и оцентруйте
// Для того чтобы слушать изменения экрана в реальном времени
// можно использовать window.addEventListener("resize",function)
// window.addEventListener("resize", function () {
//   if(this.window.inne rWidth<=740){
//     console.log('hello');
//   }
// });

// Task 2
// создайте 4 новых <li> </li> вложенных в существующий ul
// присвойте каждому li любой текст, тексты должны отличаться
// присвойте каждому li новый class = list-element

const myUL = document.getElementById("myUL");

const arr = ["Duman", "Zhenis", "Gala"];

arr.forEach((val) => {
  const newLi = document.createElement("li");
  newLi.className = "list-element";
  newLi.textContent = val;
  myUL.append(newLi);
});

const liElements = document.querySelectorAll("li");
console.log(liElements);

liElements.forEach((liElement) => {
  const newSpan = document.createElement("span");
  newSpan.className = "close";
  const txt = document.createTextNode("close");
  newSpan.append(txt);
  liElement.append(newSpan);
});

function handleClick() {
  const newTodoText = "Woke up at 7am";
  myUL.append(newTodoText);
}
const addBtn = document.getElementsByClassName("addBtn")[0];
addBtn.addEventListener("click", handleClick);
