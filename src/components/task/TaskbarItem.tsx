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
      deleteTask: () => void,
    }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      key={taskItem.id}
      className="bg-red-300 flex justify-between">
      <div> {taskItem.task}</div>
      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="../../img/addIcon.png" iconAlt="edit icon" onClick={() => setIsOpen(true)} />
        <TaskbarButton color="bg-red-500" icon="../../img/deleteIcon.png" iconAlt="delete icon" onClick={deleteTask} />
        {isOpen &&
          <EditModal isOpen taskID={taskItem.id} />}
      </div>
    </div>
  )
}
export default TaskbarItem