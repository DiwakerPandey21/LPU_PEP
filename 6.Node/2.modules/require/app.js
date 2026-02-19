// Modules: modules special object which we use inorder to give any properties or methods to another files in the same directory.

// require:
// It is our built in function to include modules that exist in seperate file.
// const req1 = require("./students/student1");
// const req2 = require("./students/student2");
// const req3 = require("./students/student3");
// console.log(req1);
// console.log(req2);
// console.log(req3);

// const stdData = require("./students");
// console.log(stdData);

// actor1,actor1,actor3.js:
// {
// name, age,description
// }

// index.js
// require(actor1, actor2, actor3) export

// app.js
// console.log(`My name is ${actor1.js(name)} and my age is ${actor2.js(age)} and this is about me ${actor3.js(description)}`)

const req = require("./require/students/practice2");
// const actor1 = require("./students/practice2/actor1");'
// const newname = req[1].name = "Shubham";
const newage = req;
newage.forEach((newname)=>{
    if(newname.age > 25)
    console.log(newname);
});


// console.log(`my age is ${newage}`);