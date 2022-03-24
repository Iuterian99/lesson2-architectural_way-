const express = require("express");
const app = express();
const router = require("./modules");
const Mongo = require("./lib/mongo");
app.use(express.json());
Mongo()
  .then(() => console.log("connected"))
  .catch((err) => console.error(err));
app.use(router);

app.listen(8000, console.log(8000));
