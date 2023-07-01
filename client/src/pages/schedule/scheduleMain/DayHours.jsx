
const DayHours = ({hoursObj}) => {
  return (
    <article>
    {hoursObj().map((el, index) => (
      <div
        className="text-[12px] h-[7.2%] "
        key={index}
      >
        {el.hour}
      </div>
    ))}
  </article>  )
}

export default DayHours