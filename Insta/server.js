import express from "express";
import fs from "fs";
const app = express();
const data = JSON.parse(
  fs.readFileSync(new URL("./data.json", import.meta.url))
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;

  const user = data[username];

  if (!user) {
    return res.send("User not found");
  }

  res.render("instagram", { user });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});