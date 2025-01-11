const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const database = "../public/data/task.db";

const app = express();
app.use(cors());
app.use(express.json());

let sql = `CREATE TABLE IF NOT EXISTS Tasks
(id INTEGER NOT NULL PRIMARY KEY  AUTOINCREMENT,
  task TEXT,isTaskFinish BOOLEAN)`;

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
  const { task, isTaskFinish }: { task: string; isTaskFinish: boolean } =
    req.body;
  const query = "INSERT INTO Tasks (task,isTaskFinish) VALUES (?,?) ";
  db.run(query, [task, isTaskFinish], (err) => {
    err
      ? console.error(`push error: ${err.message}`)
      : console.log("push data successfull");
    res.json({ task });
  });
});

app.delete("/deleteTask", (req, res) => {
  const { id }: { id: number } = req.body;
  const query = "DELETE FROM Tasks WHERE id == (?)";
  db.run(query, [id], (err, rows) => {
    err
      ? console.error(`delete data error: ${err.message}`)
      : console.log("delete successfull");
    res.json(rows);
  });
});

app.put("/updateTask", (req, res) => {
  const { id, updateTask }: { id: number; updateTask: string } = req.body;
  const query = "UPDATE Tasks SET task = (?) WHERE id = (?) ";
  db.run(query, [updateTask, id], (err) => {
    err
      ? console.error(`edit unsuccesfull: ${err.message}`)
      : console.log("edit successful");
    res.json({ id: id, task: updateTask });
  });
});

app.put("/checkboxTask", (req, res) => {
  const { id, isCheck } = req.body;
  const query = "UPDATE Tasks SET isTaskFinish = (?) WHERE id = (?)";
  db.run(query, [isCheck, id], (err) => {
    err
      ? console.error(`cant check: ${err}`)
      : console.log("now check", isCheck);
    res.json({ id: id, isTaskFinish: isCheck });
  });
});

app.listen(3000, () => console.log("listen at port 3000"));
