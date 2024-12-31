import { taskItemType } from "../utility/taskType"
import TaskbarItem from "./TaskbarItem"
import { editTask, deleteTask } from "../utility/dataTransport"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  return (
    <div className="flex flex-col">
      {tasks && tasks.map((taskItem) =>
        <li key={taskItem.id} className="list-none">
          <TaskbarItem
            taskItem={taskItem}
            deleteTask={() => deleteTask(taskItem.id)} />
        </li>

      )}
    </div>
  )
}
export default TaskList