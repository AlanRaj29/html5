const doc = window.document;
const day = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const hour = doc.querySelector("#hour");
const min = doc.querySelector("#min");
const sec = doc.querySelector("#sec");

console.log(hour, "hour");

const interval = window.setInterval(() => {
  const date = new Date();
  hour.textContent = date.getHours();
  min.textContent = date.getMinutes();
  sec.textContent = date.getSeconds();

  console.log(date.getDate());
  console.log(date.getMonth() + 1);
  console.log(date.getFullYear());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(day[date.getDay()]);
}, 1000);

const stop = () => {
  window.clearInterval(interval);
};