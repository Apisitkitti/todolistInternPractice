import { taskItemType } from "../utility/taskType"
import TaskbarItem from "./TaskbarItem"
import { deleteTask } from "../utility/dataTransport"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  const editTask = async (id: number) => {
  }
  return (
    <div className="flex flex-col">
      {tasks && tasks.map((taskItem) =>
        <li key={taskItem.id} className="list-none">
          <TaskbarItem
            taskItem={taskItem}
            editTask={() => editTask(taskItem.id)}
            deleteTask={() => deleteTask(taskItem.id)} />
        </li>

      )}
    </div>
  )
}
export default TaskList