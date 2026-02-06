function secretMessage(msg) {
  return function () {
    console.log("Secret is: " + msg);
  };
}

let secret = secretMessage("I love JS 😎");
secret();