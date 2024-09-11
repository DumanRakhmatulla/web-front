// const width = window.innerWidth;
// console.log(width);

// console.log(navigator);

// if (navigator.userAgent.includes("Chrome")) {
//   console.log("Chrome");
// } else if (navigator.userAgent.includes("Safari")) {
//   console.log("safari");
// }

// console.log(location);
// if (navigator.userAgent.includes("Safari")) {
//   console.log("Chrome");
//   location.href = "https: google.com";
// }

// console.log(document);

// навигация in Dom
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);
const firstChildNode = bodyElement.firstChild;
// console.log(firstChildNode);

const childNodesOfBodyElement = bodyElement.childNodes;
// console.log(childNodesOfBodyElement);

// for (let node of childNodesOfBodyElement) {
//   console.log(node);
// }

const elemOne = document.getElementById("first");
// console.log(elemOne);

const element = document.getElementsByTagName("div");
// console.log(element);

const elementByClass = document.getElementsByClassName("first");
// console.log(elementByClass[0]);

// query selectr
const elementOneByIdSelect = document.querySelectorAll("#first");
console.log(elementOneByIdSelect);

const elementOneByClassSelect = document.querySelectorAll(".first");
console.log(elementOneByClassSelect);

const elemByMulti = document.querySelectorAll("[random]");
console.log(elemByMulti);

const elemByMulti2 = document.querySelectorAll(".first [random]");
console.log(elemByMulti2);
