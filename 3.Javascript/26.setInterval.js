// setInterval: Its a function which is used to execute the code repeatedly after certain intervals

// // 1.
// setInterval(() => {
//   console.log("This is aa setInterval function");
// }, 2000);

// // 2.clearInterval:
// console.log("Inteval working started");
// let a = setInterval(() => {
//   console.log("This is aa setInterval function");
// }, 2000);
// console.log("Inteval working stopped");

// clearInterval(a);

// 3.counter:
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`Hello: ${count}`);
  if (count >= 5) {
    clearInterval(interval);
  }
}, 2000);
