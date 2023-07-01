import { useState } from 'react';
import { useDate } from '../../hooks/useDate';
import TasksHeader from './TasksHeader';
import TasksMyTasks from './TasksMyTasks/TasksMyTasks';
import TasksAllTasks from './TasksAllTasks/TasksAllTasks';

const Tasks = () => {
	const [isMyTasks, setIsMyTasks] = useState(true);
	const [today, plusWeek, minusWeek, resetToday] = useDate('week');
	const startWeekDay = today.clone().startOf('week');
	const endWeekDay = today.clone().endOf('week');
	return (
		<div className="h-[100vh] w-full">
			<TasksHeader
				reset={resetToday}
				plus={plusWeek}
				minus={minusWeek}
				startWeekDay={startWeekDay}
				endWeekDay={endWeekDay}
				isMyTasks={isMyTasks}
				setIsMyTasks={setIsMyTasks}
			/>
			{isMyTasks ? (
				<TasksMyTasks startWeekDay={startWeekDay} endWeekDay={endWeekDay} />
			) : (
				<TasksAllTasks />
			)}
		</div>
	);
};

export default Tasks;
