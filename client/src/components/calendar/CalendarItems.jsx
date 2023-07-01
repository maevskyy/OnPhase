

import moment from 'moment';

const CalendarItems = ({ startDay, setChosenState, chosenState }) => {

  const day = startDay.clone().subtract(1, 'day');
  const currentDay = moment();
  const totalDays = 42;
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
  return (
    <div className="grid  text-[14px] grid-cols-7 grid-rows-6 w-[15em] ">
      {daysArray.map((el) => (
        <div
          key={el.format('DDMMYYYY')}
          className={`h-[2.5em] flex items-center justify-center hover:cursor-pointer hover:bg-blue-300/25 
        ${
          currentDay.format('YYYY-MM-DD') === el.format('YYYY-MM-DD')
            ? 'bg-red-300/25'
            : ''
        }
        #
        
        ${chosenState === el.format('YYYY-MM-DD') ? 'bg-green-300/25' : ''}
`}
          onClick={() => setChosenState(el)}
        >
          {el.format('D')}
        </div>
      ))}
    </div>
  );
};

export default CalendarItems;
