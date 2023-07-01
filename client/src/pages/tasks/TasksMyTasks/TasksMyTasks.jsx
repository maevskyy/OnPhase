import MyTasksDay from './MyTasksDay';
import MyTasksCreateTask from './MyTasksCreateTask';
import { useState } from 'react';
import moment from 'moment';

const TasksMyTasks = ({ startWeekDay, endWeekDay }) => {
	const [showCreationForm, setShowCreationForm] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const daysInWeek = [];
	const day = startWeekDay.clone();
	while (!day.isAfter(endWeekDay)) {
		daysInWeek.push(day.clone());
		day.add(1, 'day');
	}

	return (
		<div className="w-full h-[89%] flex">
			<article className="w-3/12 flex items-center justify-center rounded-lg ">
				<div className="bg-[#5855D6]/5 shadow-xl w-[95%] h-[95%] rounded-lg  p-4 flex flex-col gap-[6px]">
					<h6 className="text-gray-700 text-xl font-bold tracking-wide">
						My task planner
					</h6>
					<div className="flex justify-between text-gray-600  text-xs p-1">
						<span>Completed(0)</span>
						<span>Current(0)</span>
						<span>Deleted(0)</span>
					</div>
					<button
						className="p-2 py-3 rounded-md mt-2 text-sm hover:bg-[#5855D6]/10 transition  duration-300 "
						onClick={() => {
							setShowCreationForm(!showCreationForm);
							setIsOpen(true);
						}}
					>
						+ Add task
					</button>
					{showCreationForm && (
					<MyTasksCreateTask
						setShowCreationForm={setShowCreationForm}
						myMoment={moment()}
						setIsOpen={setIsOpen}
						dateModificator
					/>
					)}
				</div>
			</article>
			<article className=" w-[70%] wrounded-lg flex rounded-lg" id="scrollbar">
				<div className="flex gap-2  items-center justify-center">
					{daysInWeek.map((day) => (
						<MyTasksDay key={day.format('YYYY MM DD')} myMoment={day} />
					))}
				</div>
			</article>
		</div>
	);
};

export default TasksMyTasks;
