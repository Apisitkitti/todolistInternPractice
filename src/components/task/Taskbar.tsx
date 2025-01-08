import { useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import TaskList from "./TaskList"
// import { editTask, fetchData, pushJsonData } from "../utility/dataTransport"
const Taskbar = () => {
  const [data, setData] = useState<taskItemType[]>([])
  const [inputTask, setInputTask] = useState<taskItemType>(
    {
      id: 0,
      task: ""
    })
  const handleClickToPushDataToJson = () => {
    if (inputTask.task.trim() === "") return;
    // pushJsonData(inputTask.task)
    setData((prevtask: taskItemType[]) => [...prevtask, { id: data.length, task: inputTask.task }]);

    setInputTask({
      id: 0,
      task: ""
    })
  }

  const handleEditTask = (id: number, updatedTask: string) => {
    setData((prevTasks: taskItemType[]) =>
      prevTasks.map((task: taskItemType) =>
        task.id === id ? { ...task, task: updatedTask } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    const filterData = data.filter((data) => id !== data.id)
    console.table(filterData)
    setData(filterData)
  }

  // useEffect(() => {
  //   fetchData(setData)
  // }, [])

  return (
    <div className="flex items-center justify-around flex-col w-max mx-auto bg-black p-2 rounded-lg">
      <div className="flex frame">
        <div className="w-full bg-white rounded-md flex items-center">
          <input type="text"
            aria-label="taskbarInput"
            placeholder="Input Your Task"
            value={inputTask.task}
            className="bg-transparent text-black px-1 focus:outline-none"
            onChange={(e) => setInputTask(
              {
                id: data.length,
                task: e.target.value
              })} />
        </div>
        <TaskbarButton
          color="bg-green-600"
          icon="Add"
          iconAlt="add button"
          onClick={handleClickToPushDataToJson}
        />
      </div>
      <TaskList
        tasks={data}
        editTask={handleEditTask}
        deleteTask={handleDeleteTask} />
    </div>
  )
}
export default Taskbar