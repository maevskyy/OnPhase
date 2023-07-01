
import { daysInWeek, hoursObj } from '../../../assets/functions';

import DayBlocks from './DayBlocks'
import DayHours from './DayHours'
import DayWeeks from './DayWeeks'

const ScheduleMain = ({startWeekDay, endWeekDay, setEventPopUp, eventPopUp}) => {
    const weeks = daysInWeek(startWeekDay, endWeekDay);
  return (
    <main className=" h-[80%]  mt-[2em] ml-[1.5em]" id='scrollbar'>
      <DayWeeks weeks={weeks} />
      <section
        id="scrollbar"
        className="h-[calc(100%-1.8em)] flex "
      >
        <DayHours hoursObj={hoursObj} />
        <DayBlocks
          weeks={weeks}
          hoursObj={hoursObj}
          setEventPopUp={setEventPopUp}
          eventPopUp={eventPopUp}
        />
      </section>
    </main>  )
}

export default ScheduleMain