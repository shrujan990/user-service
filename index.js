const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("User Service CI Triggered 🚀");
});

app.listen(3001, () => console.log("User service running"));
