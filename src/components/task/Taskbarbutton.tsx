const TaskbarButton = (
  { color,
    icon,
    iconAlt
  }:
    {
      color: string,
      icon: string,
      iconAlt: string
    }) => {
  return (
    <div className={`${color} size-7 p-1 `}>
      <img src={icon} alt={iconAlt} />
    </div>
  )
}
export default TaskbarButton