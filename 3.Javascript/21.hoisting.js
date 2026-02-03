// Hoisting: Javascript moves declaration(not initialisation) to the top of the scope during the compilation phase.

// //1. var hoisting: hoisting is possible, initialized with 'undefined'

// console.log(x);
// var x = 5; //declaration
// console.log(x);

// //2. let and const hoisting: hoisting is possible, reference error: Temporaral dead zone(TDZ)
// console.log(y); // referenceError: TDZ
// let y = 10;
// console.log(y);

// console.log(z); // referenceError: TDZ
// const z = 20;
// console.log(z);

// 3. function hoisting

function hoisting() {
  //   // var: inside function:
  //   console.log(a); // undefined
  //   var a = 10;
  //   console.log(a); // 10
  //   // let:
  //   console.log(b);
  //   let b = 20;
  //   console.log(b);

  console.log(f()); // function declaration: working
  function f() {
    return "funciton declaration";
  }
  console.log(f()); // working

  //   function expression (not fully hosited)
  console.log(bar); // undefined
  //   console.log(bar()); // Typeerror: bar is not a function
  var bar = function () {
    return "function expression";
  };
  console.log(bar());
}
//function call
hoisting();
