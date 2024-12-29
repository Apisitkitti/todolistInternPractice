import { useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../taskbarType/taskType"
import TaskList from "./TaskList"

const Taskbar = () => {
  const [data, setData] = useState<taskItemType[]>([])
  const [task, setTask] = useState<string>("")
  const handleClickToPushDataToJson = (task: taskItemType) => {
    setData((prevtask) => [...prevtask, task])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:3000/post'
        let taskData = await fetch(url)
        let taskObject: taskItemType[] = await taskData.json()
        console.log(taskObject);
        setData(taskObject)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="w-full">
          <input type="text"
            aria-label="taskbarInput"
            placeholder="Input Your Task"
            className="w-max "
            onChange={(e) => setTask(e.target.value)} />
        </div>
        <TaskbarButton
          color="bg-green-400"
          icon="../../img/addIcon.png"
          iconAlt="add button"

        />
      </div>
      <TaskList tasks={data} />
    </div>
  )
}
export default Taskbar