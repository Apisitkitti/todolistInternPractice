import TaskbarButton from "./Taskbarbutton"

const Taskbar = () => {
  const handleClickToPushDataToJson = () => {

  }
  return (
    <div className="flex items-center">
      <div className="w-full">
        <input type="text"
          aria-label="taskbarInput"
          placeholder="Input Your Task"
          className="w-max " />
      </div>
      <TaskbarButton
        color="bg-green-400"
        icon="../../img/addIcon.png"
        iconAlt="add button" />
    </div>
  )
}
export default Taskbar