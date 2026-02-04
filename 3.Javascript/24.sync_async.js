// A.synchronous programming:

// // 1.1:
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// // 1.2:
// console.log("This is a Synchronous line of code");
// for (let i = 1; i < 10000; i++) {
//   console.log("Loop is running");
// }
// console.log("Synchronous execution ends here");

// B. Asynchronous:
console.log("Execution started......");
setTimeout(() => {
  console.log(
    "This is a settimeout function which is persforming asynchronous execution",
  );
}, 1000);
for (let i = 1; i < 10000; i++) {
  console.log("Loop is running");
}
console.log("Execution ends here");
// setTimeout: it is func which we use to execute a function after specific delay:
