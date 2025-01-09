import { taskItemType } from "../utility/taskType"
import TaskbarItem from "./TaskbarItem"

const TaskList = ({
  tasks,
  editTask,
  deleteTask
}: {
  tasks: taskItemType[],
  editTask: (id: number, updateTask: string) => void,
  deleteTask: (id: number) => void
}) => {

  return (
    <div className="flex flex-col">
      {tasks.length !== 0 &&
        <div className="text-center font-semibold text-white ">Tasks</div>
      }
      {tasks.map((taskItem) =>
        <li key={taskItem.id} className=" rounded my-1 px-1 bg-emerald-400 flex list-none">
          <TaskbarItem
            taskItem={taskItem}
            deleteTask={() => deleteTask(taskItem.id)}
            editTask={editTask} />
        </li>
      )}
    </div>
  )
}
export default TaskList