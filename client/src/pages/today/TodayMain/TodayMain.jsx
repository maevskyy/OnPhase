import TodayContent from './TodayContent';
import TodayNav from '../TodayNav/TodayNav';
import { useDate } from '../../../hooks/useDate';
import { useState } from 'react';
import { TodayContext } from '../../../components/context/todayContext';
import { useSelector } from 'react-redux';

const TodayMain = () => {
	const eventState = useSelector((el) => el.scheduleReducer.blocks);
	const [today, plusDay, minusDay, resetToday] = useDate('day');
	const nearestEvent = eventState.find(
		(el) => el.date == today.format('YYYY MM DD')
	);
	const [eventId, setEventId] = useState(nearestEvent ? nearestEvent._id : null);
	return (
		<div className="flex w-full">
			<TodayContext.Provider value={{ eventId, setEventId }}>
				<TodayNav
					today={today}
					plusDay={plusDay}
					minusDay={minusDay}
					resetToday={resetToday}
				/>
			</TodayContext.Provider>
			<TodayContent eventId={eventId} />
		</div>
	);
};

export default TodayMain;
