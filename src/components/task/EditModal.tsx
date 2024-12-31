import { editTask } from "../utility/dataTransport"
import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import { useState } from "react"
const EditModal = ({ isOpen, taskID }: { isOpen: boolean, taskID: number }) => {
  const [task, setTask] = useState<string>("");
  return (
    <form className="flex justify-center items-center absolute" onBlur={() => (isOpen = false)}>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <TaskbarButton color="bg-sky-500" icon="../../img/editIcon.png" iconAlt="edit icon" onClick={() => editTask(taskID, task)} />
    </form>
  )
}
export default EditModal