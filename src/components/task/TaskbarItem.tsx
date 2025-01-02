import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import EditModal from "./EditModal"
import { useState } from "react"

const TaskbarItem = (
  {
    taskItem,
    deleteTask
  }:
    {
      taskItem: taskItemType,
      deleteTask: () => void
    }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      key={taskItem.id}
      className="flex justify-between my-1 relative">
      <div className="w-52">
        {taskItem.task}
        <EditModal taskID={taskItem.id} isOpen={isOpen} />
      </div>

      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="Edit" iconAlt="edit icon" onClick={() => setIsOpen(true)} />
        <TaskbarButton color="bg-red-500" icon="Delete" iconAlt="delete icon" onClick={deleteTask} />
      </div>
    </div>
  )
}
export default TaskbarItem