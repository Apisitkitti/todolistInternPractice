import { useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import TaskList from "./TaskList"
import { fetchData, pushJsonData } from "../utility/dataTransport"

const Taskbar = () => {
  const [data, setData] = useState<taskItemType[]>([])
  const [inputTask, setInputTask] = useState<taskItemType>(
    {
      id: 0,
      task: ""
    })
  const handleClickToPushDataToJson = () => {
    if (inputTask.task.trim() === "") return;
    pushJsonData(inputTask.task)
    setData((prevtask: taskItemType[]) => [...prevtask, inputTask]);
    setInputTask({
      id: 0,
      task: ""
    })
  }

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="flex items-center justify-around flex-col w-max mx-auto bg-black p-2 rounded-lg">
      <div className="flex frame">
        <div className="w-full bg-white rounded-md flex items-center">
          <input type="text"
            aria-label="taskbarInput"
            placeholder="Input Your Task"
            className="bg-transparent text-black px-1 focus:outline-none"
            onChange={(e) => setInputTask(
              {
                id: 0,
                task: e.target.value
              })}
            value={(inputTask.task)} />
        </div>
        <TaskbarButton
          color="bg-green-600"
          icon="Add"
          iconAlt="add button"
          onClick={handleClickToPushDataToJson}
        />
      </div>
      <TaskList tasks={data} />
    </div>
  )
}
export default Taskbar