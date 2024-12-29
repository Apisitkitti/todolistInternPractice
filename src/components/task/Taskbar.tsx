import { FormEvent, useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../taskbarType/taskType"
import TaskList from "./TaskList"

const Taskbar = () => {
  const [data, setData] = useState<taskItemType[]>([])
  // const handleClickToPushDataToJson = (e: FormEvent) => {

  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "../../../data/task.json"
        let taskData = await fetch(url)
        let taskObject: taskItemType[] = await taskData.json()
        setData(taskObject)
      } catch (err) {
        console.error(`${err}`)
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
            // onChange={handleClickToPushDataToJson}
            className="w-max " />
        </div>
        <TaskbarButton
          color="bg-green-400"
          icon="../../img/addIcon.png"
          iconAlt="add button" />
      </div>
      <TaskList tasks={data} />
    </div>
  )
}
export default Taskbar