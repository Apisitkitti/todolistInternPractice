import { taskItemType } from "../taskbarType/taskType"
import TaskbarItem from "./TaskbarItem"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  return (
    <div className="flex flex-col">
      {tasks && tasks.map((taskItem, index) =>
        <li key={index} className="list-none">
          <TaskbarItem taskItem={taskItem} key={taskItem.key} />
        </li>

      )}
    </div>
  )
}
export default TaskList