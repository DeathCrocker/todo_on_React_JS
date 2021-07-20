var express = require("express");
var cors = require("cors");
var path = require("path");
PORT = 3001;
var app = express();
app.use(cors());

app.get("/users", function (request, response) {
  var filename = path.resolve(__dirname, "./data/users.json");
  response.sendFile(filename, {});
});

app.get("/todos", function (request, response) {
  var filename = path.resolve(__dirname, "./data/todos.json");
  response.sendFile(filename, {});
});

app.listen(3001);
