// Promises:
// It represent future event. Technically it is a object. when we create a promise object we are not sure wheather this promise will be fullfilled or not.
// Promise has 3 states( pending, fullfilled,reject)
// Whenever u create a promise it is pending  means neither fullfiled not rejected state.

// // 1.1: create promise:
// const p = new Promise();

// // 1.2:  this promise will accept  2 callbacks functions:
// const p = new Promise((resolve, reject) => {});

// // 1.3:
// let kyaVadaPuraHua = false;
// let p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (kyaVadaPuraHua) {
//       resolve("vaada Poora kr diya");
//     } else {
//       reject("Aisi taisi kr di vaade ki ");
//     }
//   }, 5000);
// });

// // 2.1: consuming promise:
// p.then(
//   (msg) => {
//     console.log("Message aya hai: ", msg);
//   },
//   (err) => {
//     console.log("Error aya hai", err);
//   },
// );

// // 2.2: Promises chaining:
// p.then((msg) => {
//   console.log("Message aya hai: ", msg);
// }).catch(function (err) {
//   console.log("Error has been occured");
// });

// // // 3: Promise: p1, p2 (promise)-> p1. then(resolve).{promise p2}.then().catch(catch(reject))
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolved work after 2 seconds");
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2 resolved and it is working");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("P1 was resolved and it is working", value);
//     return 2;
//   })
//   .then((value) => {
//     console.log("Ok now we are done", value);
//   });

// // 4. Promises inside function:
// function maggiLekarAunga() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dukaanKhuliHai = true;
//       if (dukaanKhuliHai) {
//         resolve("Maggi Mil Gayi");
//       } else {
//         reject("Maggi Ni mili. dukan band hai");
//       }
//     }, 2000);
//   });
// }

// maggiLekarAunga()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Questions:
// create a function with a name downloadMovie. which take argument as url of movie. Create a promise where if url is not mp4 reject the promise status else resolve status will be executed.
function downloadMovie(url) {
  return new Promise((resolve, reject) => {
    let externalUrl = url.split("/").pop().split(".").pop();
    if (externalUrl != "mp4") {
      reject("Are u sick, put correct url");
    } else {
      setTimeout(() => {
        resolve(url.split("/").pop());
      }, 2000);
    }
  });
}

downloadMovie("myurl.com/avengers.mp4")
  .then((movie) => {
    console.log(movie);
  })
  .catch((err) => {
    console.log(err);
  });
