import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import MyTasksDayHeader from './MyTasksDayHeader';
import MyTasksDayEvent from './MyTasksDayEvent';

const MyTasksDay = ({ myMoment }) => {
	//! fix it
	const [isOpen, setIsOpen] = useState(false);
	const userEmail = useSelector((el) => el.userReducer.user.email);
	const currentDay =
		moment().format('YYYY MM DD') == myMoment.format('YYYY MM DD');
	const scheduleReducer = useSelector((el) => el.scheduleReducer.blocks);
	const tasksReducer = useSelector((el) => el.tasksReducer.tasks);
	const mapingSchedule = scheduleReducer
		.map((obj) => obj.tasks.map((task) => ({ ...task, assign: obj.title, obj })))
		.flat()
		.filter((task) => task.task.executor === userEmail);
	const allTasks = [...mapingSchedule, ...tasksReducer];

	
	return (
		<div className="w-[19em] h-[95%] bg-white rounded-lg shadow-lg p-4">
			<MyTasksDayHeader
				currentDay={currentDay}
				myMoment={myMoment}
				setIsOpen={setIsOpen}
			/>
			<div id="scrollbar" className={`${isOpen ? 'h-[47%]' : 'h-[75%]'}`}>
				<div className="flex flex-col ">
					{allTasks.map((task) => {
						if (task.date == myMoment.format('YYYY MM DD')) {
							return <MyTasksDayEvent key={task.task.id} info={task} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default MyTasksDay;
