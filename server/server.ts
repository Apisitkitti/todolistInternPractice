const express = require("express");
// const server = jsonServer.create();
// const rounter = jsonServer.rounter("../data/task.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use(rounter);
const app = express();

app.listen(3000, () => console.log("listen at port 3000"));
