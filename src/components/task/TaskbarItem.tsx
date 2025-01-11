import TaskbarButton from "./Taskbarbutton"
import Edit from "./Edit"
import { taskItemType } from "../utility/taskType"
import { useState } from "react"
import { checkboxDataPush } from "../utility/dataTransport"

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
  const handleCheckBox = (isCheckButtonIsCheck: boolean) => {
    checkboxDataPush(taskItem.id, isCheckButtonIsCheck);
  }
  return (
    <div
      key={taskItem.id}
      className=" container flex justify-between my-1">
      <div className="w-52 flex relative">
        <div className="flex">
          <input type="checkbox"
            id="checklistBox"
            className="accent-black text-black border-none"
            checked={taskItem.isTaskFinish}
            onChange={() => handleCheckBox(!taskItem.isTaskFinish)} />
          <label
            htmlFor="checklistBox"
            className={` ${taskItem.isTaskFinish ? "line-through" : "no-underline"}`}>
            {taskItem.task}</label>
        </div>
        <Edit taskID={taskItem.id} isOpen={isOpen} />
      </div>

      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="Edit" iconAlt="edit icon" onClick={() => setIsOpen(true)} />
        <TaskbarButton color="bg-red-500" icon="Delete" iconAlt="delete icon" onClick={deleteTask} />
      </div>
    </div >
  )
}
export default TaskbarItem