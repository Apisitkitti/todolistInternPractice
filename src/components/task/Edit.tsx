import TaskbarButton from "./Taskbarbutton"
import { useState } from "react"
const Edit = ({
  taskID,
  currentTask,
  editTask,
  closeEdit }: {
    taskID: number,
    currentTask: string,
    editTask: (id: number, updatedTask: string) => void,
    closeEdit: () => void;
  }) => {
  const [task, setTask] = useState<string>(currentTask);
  const handleEdit = () => {
    if (task.trim() === "") return
    // editTask(taskID, task)
    editTask(taskID, task)
    closeEdit()

  }
  return (
    <div>
      <form className="absolute flex top-0">
        <div className="w-full bg-white rounded-md flex items-center ">
          <input type="text"
            className="bg-transparent text-black px-1 focus:outline-none w-[245px]"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <TaskbarButton color="bg-green-600" icon="Submit" iconAlt="add icon" onClick={handleEdit} />
      </form>
    </div>
  )
}
export default Edit