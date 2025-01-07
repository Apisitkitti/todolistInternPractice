"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var sqlite3 = require("sqlite3").verbose();
var cors = require("cors");
var database = "../public/data/task.db";
var app = express();
app.use(cors());
app.use(express.json());
var sql = "CREATE TABLE IF NOT EXISTS Tasks\n(id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT,\n  task TEXT)";
var db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, function (err) {
    if (err)
        return console.error(err);
    else {
        console.log("now connect with sqlite db");
        db.run(sql);
    }
});
app.get("/allTasks", function (req, res) {
    db.all("SELECT * FROM Tasks", [], function (err, rows) {
        err
            ? console.error("fetch error, ".concat(err.message))
            : console.log("now get data");
        res.json(rows);
    });
});
app.post("/task", function (req, res) {
    var task = req.body.task;
    var query = "INSERT INTO Tasks (task) VALUES (?) ";
    db.run(query, [task], function (err) {
        err
            ? console.error("push error: ".concat(err.message))
            : console.log("push data successfull");
        res.json({ id: _this.lastID, task: task });
    });
});
app.delete("/deleteTask", function (req, res) {
    var id = req.body.id;
    var query = "DELETE FROM Tasks WHERE id == (?)";
    db.run(query, [id], function (err, rows) {
        err
            ? console.error("delete data error: ".concat(err.message))
            : console.log("delete successfull");
        res.json(rows);
    });
});
app.put("/updateTask", function (req, res) {
    var taskWithID = req.body.taskWithID;
    var query = "UPDATE Tasks SET task = (?) WHERE id = (?) ";
    db.run(query, [taskWithID.task, taskWithID.id], function (err) {
        err
            ? console.error("edit unsuccesfull: ".concat(err.message))
            : console.log("edit successful");
        res.json({ id: taskWithID.id, task: taskWithID.task });
    });
});
app.listen(3000, function () { return console.log("listen at port 3000"); });
