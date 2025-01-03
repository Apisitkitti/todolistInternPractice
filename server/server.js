// const express = require("express");
var jsonServer = require("json-server");
var server = jsonServer.create();
var rounter = jsonServer.rounter("../data/task.json");
server.use(rounter);
// const app = express();
server.listen(3000, function () { return console.log("listen at port 3000"); });
