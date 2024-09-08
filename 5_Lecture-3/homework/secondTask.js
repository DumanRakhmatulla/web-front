"use strict";
let res = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    res = res + i;
    console.log(res, i);
  }
}
console.log(res);
