const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const database = "../public/data/task.db";

const app = express();
app.use(cors());
app.use(express.json());

let sql = `CREATE TABLE IF NOT EXISTS Tasks
(id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT,
  task TEXT)`;

const db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
  else {
    console.log("now connect with sqlite db");
    db.run(sql);
  }
});

app.get("/allTasks", (req, res) => {
  db.all("SELECT * FROM Tasks", [], (err, rows) => {
    err
      ? console.error(`fetch error, ${err.message}`)
      : console.log("now get data");
    res.json(rows);
  });
});

app.post("/task", (req, res) => {
  const { task } = req.body;
  const query = "INSERT INTO Tasks (task) VALUES (?) ";
  db.run(query, [task], (err) => {
    err
      ? console.error(`push error: ${err.message}`)
      : console.log("push data successfull");
    res.json({ id: this.lastID, task });
  });
});

app.delete("/deleteTask", (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM Tasks WHERE id == (?)";
  db.run(query, [id], (err, rows) => {
    err
      ? console.error(`delete data error: ${err.message}`)
      : console.log("delete successfull");
    res.json(rows);
  });
});

app.put("/updateTask", (req, res) => {
  const { id, task } = req.body;
  const query = "UPDATE Tasks SET task = (?) WHERE id = (?) ";
  db.run(query, [task, id], (err) => {
    err
      ? console.error(`edit unsuccesfull: ${err.message}`)
      : console.log("edit successful");
    res.json({ id: id, task });
  });
});
app.listen(3000, () => console.log("listen at port 3000"));
