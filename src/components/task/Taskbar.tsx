import { useEffect, useState } from "react"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../taskbarType/taskType"
import TaskList from "./TaskList"

const Taskbar = () => {
  const url = 'http://localhost:3000/post'
  const [data, setData] = useState<taskItemType[]>([])
  const [inputTask, setInputTask] = useState<taskItemType>(
    {
      key: null,
      task: ""
    })

  const handleClickToPushDataToJson = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputTask)
      })
      if (response.ok) {
        const result = await response.json
        console.log(`add task:${result}`)
        setData((prevtask) => [...prevtask, inputTask])
      }
    } catch (err) {
      console.error(err)
    }
    setInputTask({
      key: null,
      task: ""
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskData = await fetch(url)
        const taskObject: taskItemType[] = await taskData.json()
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
            onChange={(e) => setInputTask(
              {
                key: Date.now(),
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