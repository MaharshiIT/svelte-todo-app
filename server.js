const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(3000, () => {
  console.log("Hot reloading at http://localhost:3000");
});
