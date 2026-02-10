// setTimeout: it is func which we use to execute a function after specific delay:

// // 1.
// function hello() {
//   console.log("This is a inner function");
// }
// setTimeout(hello, 2000);

// //2.
// setTimeout(() => {
//   console.log("This is a inner function");
// }, 2000);

// 3. clearTimeout: It is used to clear all the function working of setTimeout
console.log("Started...");
let a = setTimeout(function () {
  console.log("This is a setTimeout function");
}, 2000);
clearTimeout(a);
console.log("Ends here");
