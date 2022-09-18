var express = require("express");
var cors = require("cors");
var indexRouter = require("./routes/index");
const dbConnect = require("./database/db");

var app = express();
app.use(cors({ origin: ["https://app-humedad.surge.sh"] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

dbConnect();

module.exports = app;
