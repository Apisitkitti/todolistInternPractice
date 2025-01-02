
const TaskbarButton = (
  {
    color,
    icon,
    iconAlt,
    onClick
  }:
    {
      color: string,
      icon: string,
      iconAlt: string,
      onClick?: () => void
    }) => {
  return (
    <div className={`${color} size-7 p-1 w-max flex items-center rounded-md mx-0.5 text-white cursor-pointer `} onClick={onClick} >
      {icon}
    </div>
  )
}
export default TaskbarButton