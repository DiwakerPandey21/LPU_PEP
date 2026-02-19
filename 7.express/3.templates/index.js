const express = require("express");

const app = express();

const PORT = 3000;

const path = require("path");

app.set("view enginer", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});

app.get("/", (req, res) => {
  //   res.send("Getting response!! whoohoo");
  //   res.send("home.ejs");  //"string,html content, text data"
  res.render("home.ejs");
});
