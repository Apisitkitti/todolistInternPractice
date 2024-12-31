import { taskItemType } from "./taskType";
const url = "http://localhost:3000/posts";

export const fetchData = async (setData: (data: taskItemType[]) => void) => {
  try {
    const taskData = await fetch(url);
    const taskObject: taskItemType[] = await taskData.json();
    setData(taskObject);
  } catch (err) {
    console.error(err);
  }
};
export const pushJsonData = async (inputTask: taskItemType) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputTask),
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
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
