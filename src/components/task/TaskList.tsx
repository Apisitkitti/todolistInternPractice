import { taskItemType } from "../utility/taskType"
import TaskbarItem from "./TaskbarItem"
import { deleteTask } from "../utility/dataTransport"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  const editTask = async (id: number) => {
  }
  return (
    <div className="flex flex-col">
      {tasks && tasks.map((taskItem, index) =>
        <li key={index} className="list-none">
          <TaskbarItem
            taskItem={taskItem}
            key={taskItem.id}
            editTask={() => editTask(index)}
            deleteTask={() => deleteTask(tasks, index)} />
        </li>

      )}
    </div>
  )
}
export default TaskList