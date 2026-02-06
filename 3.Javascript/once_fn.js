function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

function greet(name) {
  console.log("Hello", name);
  return `Welcome ${name}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Diwaker")); 
console.log(greetOnce("Pandey"));  
