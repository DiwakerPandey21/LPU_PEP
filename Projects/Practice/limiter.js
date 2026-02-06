function limitAction(fn, limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      fn();
      count++;
    } else {
      console.log("Limit reached ❌");
    }
  };
}

let sayHi = limitAction(() => console.log("Hi!"), 3);

sayHi();
sayHi();
sayHi();
sayHi();