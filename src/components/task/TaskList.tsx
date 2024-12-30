import { taskItemType } from "../utility/taskType"
import { useState } from "react"
import TaskbarItem from "./TaskbarItem"
const TaskList = ({ tasks }: { tasks: taskItemType[] }) => {
  const url = 'http://localhost:3000/post'
  const deleteTask = async (id: number) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (response.ok) {
        const updateData = tasks.filter(tasks => tasks.id !== id)
      }
    } catch (err) {
      console.error(err)
    }

  }
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
            deleteTask={() => deleteTask(index)} />
        </li>

      )}
    </div>
  )
}
export default TaskList