// DOM element onclick

const btn = document.querySelectorAll(".btn")[0],
  btn1 = document.querySelectorAll(".btn")[2],
  btn2 = document.querySelectorAll(".btn")[1],
  body = document.querySelector("body");

// btn.onclick = function () {
//   alert("Hello");
// };

btn.addEventListener("click", (e) => {
  //   alert("hello");
  e.target.remove();
});

let i = 0;

const count = function () {
  console.log(i, "i increasing");
  i++;
  if (i === 3) {
    btn1.removeEventListener("click", count);
  }
};

btn1.addEventListener("click", count);

btn2.addEventListener("mouseover", function (e) {
  console.log(e);
  btn2.style.backgroundColor = "black";
});

btn2.addEventListener("mouseout", function (e) {
  console.log(e);
  btn2.style.backgroundColor = "blue";
});

body.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    alert("you pressed D");
  }
});
