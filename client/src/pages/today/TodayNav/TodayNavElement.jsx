import moment from 'moment';
import { useContext } from 'react';
import { TodayContext } from '../../../components/context/todayContext';
const TodayNavElement = ({ today, fullInfo }) => {
	const { hourFrom, hourTill, title } = fullInfo;
	const { eventId, setEventId } = useContext(TodayContext);
	const currentDay = moment();
	const startTime = moment({ hour: hourFrom });
	const endTime = moment({ hour: hourTill });
	startTime.set({
		year: today.year(),
		month: today.month(),
		date: today.date(),
	});
	endTime.set({ year: today.year(), month: today.month(), date: today.date() });
	const isOngoing =
		currentDay.format('YYYY MM DD') == today.format('YYYY MM DD') &&
		today.isBetween(startTime, endTime);

	return (
		<section
			onClick={() => setEventId(fullInfo._id)}
			className={`${
				eventId == fullInfo._id && 'bg-red-50 border-red-400'
			} hover:cursor-pointer border-l-[4px] rounded-[3px]  items-center  flex justify-between p-3`}
		>
			<div className="flex flex-col gap-2">
				<h3>{title}</h3>
				<h4 className="text-xs">
					{hourFrom} - {hourTill}
				</h4>
			</div>
			<div className="text-sm">
				{isOngoing ? (
					<span className=" bg-red-500 text-white p-2 text-xs rounded-md">
						ongoing
					</span>
				) : (
					<span className="p-2 text-xs">unactive</span>
				)}
			</div>
		</section>
	);
};

export default TodayNavElement;
