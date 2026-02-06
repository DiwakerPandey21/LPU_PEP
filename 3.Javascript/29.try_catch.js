// // A: try, catch and finally
// // try:  risky code
// // catch: to handle errors
// // finally:

// try {
//   let a = 10;
//   console.log(a.toUpperCase());
// } catch (err) {
//   console.log("Error caught:", err.message);
// } finally {
//   console.log("Always runs");
// }

// // B: Async/await:
// // Async is a keyword used before a function to make it asynchronous:
// // Async: To represent promises in clear version we use async and await:

// function getMaggi() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Maggi is ready");
//     }, 2000);
//   });
// }

// async function eatMaggi() {
//   console.log("Waiting...");

//   try {
//     let result = await getMaggi(); //
//     console.log(result);
//   } catch (error) {
//     console.log("error:", error);
//   }
//   console.log("Done eating");
// }
// eatMaggi();

// C: Async always return a promise:
async function demo() {
  return 10;
}
demo().then(console.log); //10: resolve state of promise

