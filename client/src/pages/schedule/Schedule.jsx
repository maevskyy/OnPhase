import { AnimatePresence, motion } from 'framer-motion';
import { useDate } from '../../hooks/useDate';
// import ScheduleCreate from './scheduleCreate/ScheduleCreate';
// import ScheduleEvent from './scheduleEvent/ScheduleEvent';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleHeader from './ScheduleHeader';
import ScheduleCreate from './scheduleCreate/ScheduleCreate';
import ScheduleMain from './scheduleMain/ScheduleMain';
import ScheduleEvent from './scheduleEvent/ScheduleEvent';
import { getAllSchedule } from '../../store/schedule';
import { SchedulePopUp } from '../../components/context/schedulePopUpcontext';
const Schedule = () => {
	// const userEmail = useSelector((el) => el.userReducer.user.email);
	const dispatch = useDispatch();
	const [today, plusWeek, minusWeek, resetToday] = useDate('week');
	const [eventPopUp, setEventPopUp] = useState({
		condition: false,
		blockInfo: null,
	});
	const [createPopUp, setCreatePopUp] = useState(false);
	const startWeekDay = today.clone().startOf('week');
	const endWeekDay = today.clone().endOf('week');

	// useEffect(() => {
	// 	dispatch(getAllSchedule(userEmail));
	// }, [dispatch, userEmail]);

	return (
		<div className="w-full h-[100vh] relative">
			<ScheduleHeader
				reset={resetToday}
				plus={plusWeek}
				minus={minusWeek}
				startWeekDay={startWeekDay}
				endWeekDay={endWeekDay}
				setCreatePopUp={setCreatePopUp}
			/>
			<SchedulePopUp.Provider value={setEventPopUp}>
				<ScheduleMain
					startWeekDay={startWeekDay}
					endWeekDay={endWeekDay}
					eventPopUp={eventPopUp}
					setEventPopUp={setEventPopUp}
				/>
			</SchedulePopUp.Provider>
			<AnimatePresence>
				{createPopUp && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						<ScheduleCreate
							setCreatePopUp={setCreatePopUp}
							eventPopUp={eventPopUp}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{eventPopUp.condition && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						<SchedulePopUp.Provider value={setEventPopUp}>
							<ScheduleEvent
								setCreatePopUp={setCreatePopUp}
								setEventPopUp={setEventPopUp}
								eventPopUp={eventPopUp}
							/>
						</SchedulePopUp.Provider>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Schedule;
