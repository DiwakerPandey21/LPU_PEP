// ROUTING:
// It is a process of selecting path for traffic in a network or between or across mutiple networks

import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// // routing
// app
//   .get("/", (req, res) => {
//     res.send("This is a root path");
//   });
// .get("/super-hero", (req, res) => {
//   const htmlContent =
//     "<ul>Super Hero's<li>Batman</li><li>Superman</li><li>Heman</li><li>Iron Man</li></ul> ";
//   res.send(htmlContent);
// })
// .use((req, res) => {
//   res.status(404).send("Please hit the correct route");
// });

// path parameter:
app.get("/", (req, res) => {
  res.send("This is a root");
});

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send("This is a root");
});

app.get("/profile/:username/:id", (req, res) => {
  let { username, id } = req.params;
  // console.log(req.params);
  // res.send("This is a root");
  res.send(`Welcome to user page: ${username} whose id is:${id}`);
});

// Query string:
app.get("/search", (req, res) => {
  console.log(req.query);
});
