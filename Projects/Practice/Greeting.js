function createGreeting(name) {
  return function () {
    console.log("Hello " + name + " 👋");
  };
}

let greet = createGreeting("Shubham");
greet();  