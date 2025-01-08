import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"
import Edit from "./Edit"
import { useState } from "react"

const TaskbarItem = (
  {
    taskItem,
    deleteTask,
    editTask
  }:
    {
      taskItem: taskItemType,
      deleteTask: () => void,
      editTask: (id: number, newText: string) => void
    }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      key={taskItem.id}
      className="flex justify-between my-1 relative">
      <div className="w-52">
        {taskItem.task}
        {isOpen &&
          <Edit
            taskID={taskItem.id}
            currentTask={taskItem.task}
            editTask={editTask}
            closeEdit={() => setIsOpen(false)} />}
      </div>

      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="Edit" iconAlt="edit icon" onClick={() => setIsOpen(true)} />
        <TaskbarButton color="bg-red-500" icon="Delete" iconAlt="delete icon" onClick={deleteTask} />
      </div>
    </div>
  )
}
export default TaskbarItem