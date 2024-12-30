import { useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import TaskList from "./TaskList"
import { fetchData, pushJsonData } from "../utility/dataTransport"
const Taskbar = () => {
  const [data, setData] = useState<taskItemType[]>([])
  const [inputTask, setInputTask] = useState<taskItemType>(
    {
      id: null,
      task: ""
    })
  const handleClickToPushDataToJson = async () => {
    if (inputTask.task.trim() === "") return;
    pushJsonData(inputTask)
    setData((prevtask: taskItemType[]) => [...prevtask, inputTask]);
    setInputTask({
      id: null,
      task: ""
    })
  }
  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="w-full">
          <input type="text"
            aria-label="taskbarInput"
            placeholder="Input Your Task"
            onChange={(e) => setInputTask(
              {
                id: Date.now(),
                task: e.target.value
              })} />
        </div>
        <TaskbarButton
          color="bg-green-400"
          icon="../../img/addIcon.png"
          iconAlt="add button"
          onClick={handleClickToPushDataToJson}
        />
      </div>
      <TaskList tasks={data} />
    </div>
  )
}
export default Taskbar