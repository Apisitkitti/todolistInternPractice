import { editTask } from "../utility/dataTransport"
import TaskbarButton from "./Taskbarbutton"
import { useState } from "react"
const Edit = ({ taskID, isOpen }: { taskID: number, isOpen: boolean }) => {
  const [task, setTask] = useState<string>("");

  const handleEdit = () => {
    if (task.trim() === "") return
    editTask(taskID, task)
  }
  return (
    <div>
      {isOpen &&
        <form className="absolute flex top-0 left-0 h-max">
          <div className="w-full bg-white rounded-md flex items-center ">
            <input type="text"
              className="bg-transparent text-black px-1 focus:outline-none w-[245px]"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          <TaskbarButton color="bg-green-600" icon="Submit" iconAlt="add icon" onClick={handleEdit} />
        </form>}
    </div>
  )
}
export default Edit