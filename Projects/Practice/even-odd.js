let arr = [1, 2, 3, 4, 5, 6];

let even = arr.filter(num => num % 2 === 0);
let odd = arr.filter(num => num % 2 !== 0);

console.log("Even:", even);
console.log("Odd:", odd);