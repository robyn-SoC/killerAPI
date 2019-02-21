const express = require(express);

const Library = require("./library.js");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log("We have had a request come in");
  next();
});

app.get("/");

app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
