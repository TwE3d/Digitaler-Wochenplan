const http = require("http");
const path = require("path");
const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static('public'));

var routes = require("./routes/routes.js")(app);


app.listen(8040);