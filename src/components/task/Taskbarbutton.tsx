

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
    <div className={`${color} size-7 p-1 `} onClick={onClick} >
      <img src={icon} alt={iconAlt} />
    </div>
  )
}
export default TaskbarButton