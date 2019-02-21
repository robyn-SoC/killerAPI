const express = require("express");

const Library = require("./library.js");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("We have had a request come in");
  next();
});

app.get("/killers/:number", (req, res) => {
  const number = req.params.number;
  const killer = Library.getKillerByNumber(number);
  if (!killer) {
    return res.json({ message: "Please enter a valid number" });
  }
  res.json({ killer });
});

app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
