var express = require("express");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const dbConnect = require("./database/db");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

dbConnect();

module.exports = app;
