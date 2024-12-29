import { taskItemType } from "../taskbarType/taskType"
import TaskbarItem from "./TaskbarItem"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  return (
    <div className="flex flex-col">
      {tasks.map((taskItem, index) =>
        <TaskbarItem taskItem={taskItem} key={index} />
      )}
    </div>
  )
}
export default TaskList