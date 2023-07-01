import { useState } from 'react';
import Calendar from '../../../components/calendar/Calendar';
import { hoursObj } from '../../../assets/functions';

const EventDateTime = ({
	calendarEvent,
	tableDateHandler,
	setCalendarEvent,
	setReminder
}) => {
	const [openCalendar, setOpenCalendar] = useState(false);
	return (
		<article className="flex flex-col relative">
			<h4 className="text-[12px] mb-2">Tell us when?</h4>
			<input
				readOnly
				type="text"
				value={calendarEvent.date.format('YYYY MM DD')}
				className="mb-1 outline-none first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
				onClick={() => setOpenCalendar((prev) => !prev)}
			/>
			{openCalendar && (
				<div className="absolute z-[100] top-[3.5em]">
					<Calendar
						setChosenState={tableDateHandler}
						chosenState={calendarEvent.date}
					/>
				</div>
			)}
			<div className="flex gap-1">
				<select
					className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
					onChange={(e) =>
						setCalendarEvent({
							...calendarEvent,
							hourFromPx: e.target.value.slice(0, 7).trim(),
							hourFrom: e.target.value.slice(7).trim(),
						})
					}
				>
					{hoursObj().map((el) => (
						<option value={`${el.top.toFixed(2)}%  ${el.hour}`} key={el.hour}>
							{el.hour}
						</option>
					))}
				</select>
				<select
					className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
					onChange={(e) =>
						setCalendarEvent({
							...calendarEvent,
							hourTillPx: e.target.value.slice(0, 8).trim(),
							hourTill: e.target.value.slice(8).trim(),
						})
					}
				>
					{hoursObj()
						.slice(1)
						.map((el) => (
							<option
								value={`${el.bottom.toFixed(2)}%  ${el.hour}`}
								key={el.hour}
							>
								{el.hour}
							</option>
						))}
				</select>
			</div>
			<div className="flex gap-2 ">
				<h4 className="text-[12px] mb-2 hover:cursor-pointer mt-2">Reminder</h4>
				<select
					className="text-[12px] outline-none p-1"
					defaultValue="30:00"
					onChange={(e) => setReminder(e.target.value)}
				>
					<option value="60:00" key="131323">
						60:00
					</option>
					<option value="45:00" key="1232">
						45:00
					</option>
					<option value="30:00" key="12324">
						30:00
					</option>
					<option value="15:00" key="65656">
						15:00
					</option>
					<option value="10:00" key="2342767">
						10:00
					</option>
					<option value="05:00" key="24134656">
						05:00
					</option>
					<option value="01:00" key="1246">
						01:00
					</option>
				</select>
			</div>
		</article>
	);
};

export default EventDateTime;
