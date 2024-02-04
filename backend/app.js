const express = require("express");
const app = express();

const ErrorMiddleWare = require("./middleWare/error");

app.use(express.json());

// route import

const product = require("./routes/productRoute");

app.use("/api/v1", product);

// middleware for error
app.use(ErrorMiddleWare);

module.exports = app;