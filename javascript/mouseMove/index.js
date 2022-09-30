const doc = window.document;
const circle = doc.querySelector(".circle");

console.log(circle);

function moving(e) {
  circle.style.top = `${e.y}px`;
  circle.style.left = `${e.x}px`;
  console.log(e.x, "x");
  console.log(e.y, "y");
}