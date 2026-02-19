import fs from "fs"; // node.fs()
// console.log(fs);

// // 1.Reading from file :
// const readFilee = fs.readFileSync("note.txt", "utf-8");
// console.log(readFilee);

// 2.wrting to file:
// fs.writeFileSync("note.txt", "file content changed", "utf-8");

// fs.writeFileSync("temp.txt", "file content changed", "utf-8");

// // 3. add some data to the file:
// fs.appendFileSync("temp.txt", "\n New content written");

// // 4. make new directory: node/xyz/
// fs.mkdirSync("node/xyz", { recursive: true });

// 5. remove directory: node
// fs.rmdirSync("node"); // error: you have to remove all inside folders 1st in order to remove outer one
// fs.rmdirSync("node/xyz");
// fs.rmdirSync("node");

// sync: Blocking operations: Programs waits untill the task is finished.
// console.log("Started........\n");

// const content = fs.readFileSync("note.txt", "utf-8");
// console.log(content);

// console.log("Ends here........");

// async: Non-blocking operation: Program wont wait until the task is finished

console.log("Started........\n");

const content = fs.readFile("note.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("\n Content is:", data);
});

console.log("Ends here........");
