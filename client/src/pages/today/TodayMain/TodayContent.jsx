import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeScheduleNote } from '../../../store/schedule';
import TodayContentHeader from './TodayContentHeader';
import TodayContentButton from './TodayContentButton';
import TodayContentNote from './TodayContentNote';
import TodayContentTasks from './TodayContentTasks';
import TodayContentRACI from './TodayContentRACI/TodayContentRACI';

const TodayContent = ({ eventId }) => {
	const eventsState = useSelector((el) => el.scheduleReducer);
	const dispatch = useDispatch();
	const [activeWindow, setActiveWindow] = useState('Note');
	const eventInfo = eventsState.blocks.find((event) => event._id === eventId);
	const [textAtea, setTextAtea] = useState('');
	const buttonsArr = ['Tasks', 'Note', 'RACI'];
	const handleWindowToggle = (windowName) => {
		setActiveWindow(windowName);
	};
	const textAreaBlur = () => {
		dispatch(
			changeScheduleNote({
				...eventInfo,
				description: { ...eventInfo.description, content: textAtea },
			})
		);
	};
	useEffect(() => {
		setTextAtea(eventInfo.description.content);
	}, [eventId]);
	return (
		<div className="w-full p-6 flex flex-col gap-5 h-full">
			<TodayContentHeader
				title={eventInfo.title}
				date={eventInfo.date}
				hourFrom={eventInfo.hourFrom}
			/>
			<div className="flex gap-7">
				{buttonsArr.map((el, i) => (
					<TodayContentButton
						text={el}
						key={i}
						activeWindow={activeWindow}
						handleWindowToggle={handleWindowToggle}
					/>
				))}
			</div>

			{activeWindow === 'Note' && (
				<TodayContentNote
					text={textAtea}
					setTextAtea={setTextAtea}
					textAreaBlur={textAreaBlur}
				/>
			)}
			{activeWindow === 'Tasks' && <TodayContentTasks allTasks={eventInfo.tasks} plsWtfIsThis={eventInfo} />}
			{activeWindow === 'RACI' && <TodayContentRACI />}
		</div>
	);
};

export default TodayContent;
