var _this = this;
var express = require("express");
var sqlite3 = require("sqlite3").verbose();
var cors = require("cors");
var database = "../public/data/task.db";
var app = express();
app.use(cors());
app.use(express.json());
var sql = "CREATE TABLE IF NOT EXISTS Tasks(id INTEGER PRIMARY KEY AUTOINCREMENT,task TEXT)";
var db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, function (err) {
    if (err)
        return console.error(err);
    else {
        console.log("now connect with sqlite db");
        db.run(sql);
    }
});
app.get("/all_tasks", function (req, res) {
    db.all("SELECT * FROM Tasks", function (err, rows) {
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
            ? console.error("push error, ".concat(err.message))
            : console.log("push data successfull");
        res.json({ id: _this.lastID, task: task });
    });
});
app.listen(3000, function () { return console.log("listen at port 3000"); });
