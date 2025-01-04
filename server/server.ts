const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const database = "../public/data/task.db";

const app = express();
app.use(cors());
app.use(express.json());
let sql = `CREATE TABLE IF NOT EXISTS Tasks(id INTEGER PRIMARY KEY AUTOINCREMENT,task TEXT)`;

const db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
  else {
    console.log("now connect with sqlite db");
    db.run(sql);
  }
});

app.get("/all_tasks", (req, res) => {
  db.all("SELECT * FROM Tasks", (err, rows) => {
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
      ? console.error(`push error, ${err.message}`)
      : console.log("push data successfull");
    res.json({ id: this.lastID, task });
  });
});

app.listen(3000, () => console.log("listen at port 3000"));
