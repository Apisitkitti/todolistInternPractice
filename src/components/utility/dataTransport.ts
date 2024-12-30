import { taskItemType } from "./taskType";

const url = "http://localhost:3000/post";

export const fetchData = async (setData: (data: taskItemType[]) => void) => {
  try {
    const taskData = await fetch(url);
    const taskObject: taskItemType[] = await taskData.json();
    console.log(taskObject);
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
