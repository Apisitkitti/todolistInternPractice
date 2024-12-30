import TaskbarButton from "./Taskbarbutton"
import { taskItemType } from "../utility/taskType"

const TaskbarItem = (
  { taskItem,
    deleteTask,
    editTask
  }:
    {
      taskItem: taskItemType,
      deleteTask: () => void
      editTask: () => void
    }) => {
  return (
    <div key={taskItem.id} className="bg-red-300 flex justify-between">
      <div> {taskItem.task}</div>
      <div className="flex">
        <TaskbarButton color="bg-sky-500" icon="../../img/editIcon.png" iconAlt="edit icon" onClick={editTask} />
        <TaskbarButton color="bg-red-500" icon="../../img/deleteIcon.png" iconAlt="delete icon" onClick={deleteTask} />
      </div>
    </div>
  )
}
export default TaskbarItem