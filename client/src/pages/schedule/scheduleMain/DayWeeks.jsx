import moment from 'moment';

const DayWeeks = ({weeks}) => {
  return (
    <section className="flex ml-[1.7em]">
      {weeks.map((el) => (
        <div
          key={el.format('DDMMYYYY')}
          className={`w-[100%] flex justify-center text-[14px]${
            moment().format('YYYY MM DD') === el.format('YYYY MM DD')
              ? 'text-black font-bold'
              : 'text-gray-800'
          }`}
        >
          {el.format('DD dd')}
        </div>
      ))}
    </section>  )
}

export default DayWeeks