// this: it is a keyword. which referes to the object that is executing current function. Its value is define at runtime(how a function is called)

// // 1. this in global space:
// // Browser: window object-> non-strict, strict -> window
// // In nodejs: non-strict: {object/modules}, strict: node global object
// console.log(this);
// ("use strict");
// console.log(this);

// // 2.1 this inside the function:
// // non-strict: global object (window,global)
// // strict mode:
// // this -> undefined
// function x() {
//   console.log(this);
// }
// x();

// // 2.2: this depend on how function is called:
// // same function different call different this behavior.
// function show() {
//   console.log(this);
// }
// show(); // global: undefined
// window.show(); //window(browser)

// // 3. this inside a object: so this inside a object referes to object.
// // IMP RULE:
// // when a function is called using dot.(obj.method()), this refer to the object nefore the dot.
// const obj = {
//   a: 10,
//   b: function () {
//     console.log(this); // refer to obj
//     console.log(this.a); // a->10
//   },
// };
// obj.b();

// // 4.methods:call(),apply(),bind():

// const student1 = {
//   name: "yash",
// };

// const student2 = {
//   name: "richa",
// };

// function showDetails(state1, state2) {
//   console.log(this.name);
//   console.log(state1, state2);
// }
// // call= arguments passed individually
// showDetails("axt", "asdsa");

// showDetails.call(student1, "mumbai", "gwalior");
// // apply: arguments passed as an array:
// showDetails.apply(student2, ["Uttar prades", "delhi"]);
// // bind: return a new function:
// const boundFunc = showDetails.bind(student2, "noida", "rajasthan");
// boundFunc();

// // 5.this: inside an arrow function
// // IMP POINT:
// // arrow function dont have there own this
// // they take this from their lexical environement. Here lexical environment means global scope.
// const num = {
//   a: 10,
//   b: () => {
//     console.log(this);
//   },
// };
// num.b(); // this  is not equal to num

// const num2 = {
//   a: 10,
//   x: function () {
//     console.log(this.a); // now this is refering to object and obj.a = 10
//   },
// };
// num2.x();

// 6. this inside dom(browser):
// here this refer to the element on which event occuered:

// <button onclick=handleClick()"">Click Me</button>
// function handleClick(){
// console.log(this) // refer to the button element
// }
