import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../taskbarType/taskType"
const TaskbarItem = (
  { taskItem }:
    { taskItem: taskItemType }) => {
  return (
    <div key={taskItem.key}>
      <div> {taskItem.name}</div>
      <TaskbarButton color="bg-sky-500" icon="../../img/editIcon.png" iconAlt="edit icon" />
      <TaskbarButton color="bg-sky-500" icon="../../img/deleteIcon.png" iconAlt="delete icon" />
    </div>
  )
}
export default TaskbarItem