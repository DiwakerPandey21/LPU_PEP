// // A.callback:
//1.1
// function first() {
//   console.log("This is a first function");
// }

// function second() {
//   console.log("This is a second function");
// }

// first();
// second();

// // 1.2:
// // A.callback:
// function first() {
//   console.log("This is a first function");
// }

// function second(call) {
//   console.log("This is a second function");
//   call();
// }
// // call 1st func inside 2nd func: 2nd function is calling1st function inside it
// second(first);

// B.callback Hell or pyramid od Doom:

// 2.1
// const items = ["shoes", "jeans", "kurta"];

// // eccommerce-> item select->cart(payment)->orderSummary->wallet()

// api.createOrder(items, () => {
//   api.procedToPayment(() => {
//     api.orderSummary(() => {
//       api.wallet();
//     });
//   });
// });

// // 2.1:we are creating nested callbacks: which make our code hard to read and maintain result in callback hell sitution:
// // Write a program where ur making maggie:
// // 1.  Buy the maggie
// // 2.  Maggie Bought
// // 3. Start preparing maggie
// // 4. Maggie Prepared
// // 5. Maggie eaten
// // 6. Maggie eating done

// console.log("Buy the maggie");
// setTimeout(function () {
//   console.log("Maggie Bought");
//   console.log("Start preparing maggie");
//   setTimeout(() => {
//     console.log("Maggie Prepared");
//     console.log("Maggie eaten");
//     setTimeout(() => {
//       console.log("Maggie eating done");
//     }, 2000);
//   }, 5000);
// }, 2000);

// 3. We will have more structural approach to avoid callback hell situation: using asynchronous programming way:

function BuyMaggie(cb) {
  console.log("Maggie Bought");
  setTimeout(function () {
    console.log("Maggie Bought");
  }, 2000);
  cb(eatingMaggie);
}

function MakeMaaggie(cb) {
  console.log("Maggie start Prepared");
  setTimeout(function () {
    console.log("Maggie preparation done");
    cb();
  }, 5000);
}

function eatingMaggie() {
  console.log("Maggie eaten started");
  setTimeout(function () {
    console.log("Maggie eating done");
  }, 2000);
}

BuyMaggie(MakeMaaggie);
