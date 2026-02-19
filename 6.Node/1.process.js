// console.log(process.argv);

// 1.2: we want to print some value using argv:
const arg = process.argv;
for (let i = 2; i < arg.length; i++) {
  console.log("Hey There:", arg[i]);
}
