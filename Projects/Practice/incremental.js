function idGenerator() {
  let id = 0;

  return function () {
    id++;
    return id;
  };
}

let generateId = idGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());