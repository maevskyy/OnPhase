import { useDate } from '../../hooks/useDate';
import CalendarItems from './CalendarItems';
import CalendarMonitior from './CalendarMonitior';


const Calendar = ({ setChosenState, chosenState }) => {
  const [today, plusMonth, minusMonth, resetToday] = useDate('month');
  const startDay = today.clone().startOf('month').startOf('week');

  // make my code more dry 

  return ( 
    <div className="rounded-md select-none shadow-2xl bg-white p-3 w-fit flex flex-col gap-2 border-2">
      <CalendarMonitior
        today={today}
        plusMonth={plusMonth}
        minusMonth={minusMonth}
        resetToday={resetToday}
      />
      <CalendarItems
        setChosenState={setChosenState}
        startDay={startDay}
        chosenState={chosenState}
      />
    </div>


  );
};

export default Calendar;
