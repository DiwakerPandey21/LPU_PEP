let users = [
  { name: "Shubham", active: true },
  { name: "Aditi", active: false },
  { name: "Ravi", active: true }
];

let activeNames = users
  .filter(user => user.active === true)
  .map(user => user.name);

console.log(activeNames);