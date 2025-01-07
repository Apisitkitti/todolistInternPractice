import { taskItemType } from "./taskType";
import { createClient } from "@libsql/client";

const url = "http://localhost:3000";
export const fetchData = async (setData: (data: taskItemType[]) => void) => {
  try {
    const taskData = await fetch(`${url}/allTasks`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const taskObject: taskItemType[] = await taskData.json();
    setData(taskObject);
  } catch (err) {
    console.error(err);
  }
};
export const pushJsonData = async (inputTask: string) => {
  try {
    const response = await fetch(`${url}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: inputTask }),
    });
    if (response.ok) {
      const result = await response.json;
      console.log(`add task:${result}`);
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await fetch(`${url}/deleteTask`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      const dataInJsObject = await response.json;
      console.log(`delete task:${dataInJsObject}`);
      console.log("delete" + id);
    }
  } catch (err) {
    console.error(err);
    console.log("delete" + id);
  }
};
export const editTask = async (id: number, newTask: string) => {
  try {
    const response = await fetch(`${url}/updateTask`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, task: newTask }),
    });
    if (response.ok) {
      alert("Edit Successfull");
    }
  } catch (err) {
    console.error(err);
  }
};
