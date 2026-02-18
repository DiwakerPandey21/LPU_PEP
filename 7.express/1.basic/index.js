import express from "express";

const app = express(); // object it return: lot of methods and properties it has.
// console.log(app);

// listen(fn): incoming requests.
// 2 arguments: PORT, callback
app.listen(3000, () => {
  console.log("App is listening at port 3000");
});

app.use((req, res) => {
  //   console.log("Request received");
  //   res.send("This is a basic response");
  //   res.send({
  //     name: "shiva",
  //     age: 25,
  //   });
  //   res.send("<h1>We are learning res object send</h1>");

  const htmlContent =
    "<ul>Super Hero's<li>Batman</li><li>Superman</li><li>Heman</li></ul> ";
  res.send(htmlContent);
});
