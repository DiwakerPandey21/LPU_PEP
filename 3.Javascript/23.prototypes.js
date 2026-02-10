// Prototypes:
// Js is a prototype language. Every object has a hidden proprty called [prototype]
// We can access it using __proto__

// // 1.basic about prototype:
const person1 = {
  name: "shiva",
  age: "25",
  isAdult: true,
};
console.log(person1);

// 2. creating object: here person2's prototype is person1
const person2 = Object.create(person1);
console.log(person2);

// person3's prototypes is person2
const person3 = Object.create(person2);
console.log(person3);

// 3.prototype chaining: person3 -> person2 -> person1 -> object.prototype -> null
console.log(person2.name);
console.log(person2.age);
console.log(person3.name);

// 4.checking prototype link:
console.log(person3.__proto__ === person2);
console.log(person2.__proto__ === person1);
console.log(person1.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); // chaining ends here

// 5.Property overriding(shadowing)
person2.name = "vivek"; // creating its own property for person2
console.log(person3.name); // vivek (found in person2)
// but person3 doesnt have name
// person3 does have name so it stop at person2.

// 6.hasOwnProperty: it basically checks for object
console.log(person3.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("name"));

// 7. Prototype in array: array -> Array.prototype -> Object.prototype -> null
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr.__proto__ === Array.prototype);

// 8.Prototypes in function:
// In function there are 2 types of prototype:
// 1. __proto__ - it is used for inheritance
// 2. prototype - it is used when function is used as a constructor
const func = function () {
  console.log("This is my function");
};
console.log(func.__proto__ === Function.prototype);
console.log(func.prototype.__proto__ === Object.prototype);
