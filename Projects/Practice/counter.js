function stepCounter(step) {
  let count = 0;

  return function () {
    count += step;
    return count;
  };
}

let counter = stepCounter(5);

console.log(counter());
console.log(counter());
console.log(counter());