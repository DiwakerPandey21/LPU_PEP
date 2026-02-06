let arr = [10, 20, 30, 40];

let avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;

console.log(avg);