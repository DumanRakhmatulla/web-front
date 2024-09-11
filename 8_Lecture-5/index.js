const width = window.innerWidth;
console.log(width);

console.log(navigator);

if (navigator.userAgent.includes("Chrome")) {
  console.log("Chrome");
} else if (navigator.userAgent.includes("Safari")) {
  console.log("safari");
}

console.log(location);
if (navigator.userAgent.includes("Safari")) {
  console.log("Chrome");
  location.href = "https: google.com";
}
