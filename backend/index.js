const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose
  .connect("")
  .then(() => console.log("connected to mongo db..."))
  .catch((err) => console.error("could not connect to the mongo db", err));

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... `));
