import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../taskbarType/taskType"
const TaskbarItem = (
  { taskItem }:
    { taskItem: taskItemType }) => {
  return (
    <div key={taskItem.key} className="bg-red-300 flex justify-between">
      <div> {taskItem.name}</div>
      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="../../img/editIcon.png" iconAlt="edit icon" />
        <TaskbarButton color="bg-red-500" icon="../../img/deleteIcon.png" iconAlt="delete icon" />
      </div>
    </div>
  )
}
export default TaskbarItem