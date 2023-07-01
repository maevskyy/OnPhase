import { useState } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { MdDateRange, MdOutlineMeetingRoom } from 'react-icons/md';
import { nanoid } from '@reduxjs/toolkit';
import { headStyles } from '../../../style';
import { addTask } from '../../../store/tasks';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from '../../../components/calendar/Calendar';
import moment from 'moment';

const MyTasksCreateTask = ({
	setShowCreationForm,
	myMoment,
	setIsOpen,
	dateModificator,
}) => {
	const dispatch = useDispatch();
	const userEmail = useSelector((el) => el.userReducer.user.email);
	const [calendar, setCalendar] = useState(moment());
	const taskInit = {
		date: myMoment.format('YYYY MM DD'),
		task: {
			id: nanoid(),
			isCompleted: false,
			title: '',
			content: '',
			executor: '',
		},
	};
	const [taskForm, setTaskForm] = useState(taskInit);
	const [showCalendar, setShowCalendar] = useState(false);

	const createTaskHandler = () => {
		if (dateModificator) {
			dispatch(addTask({ ...taskForm, date: calendar.format('YYYY MM DD'), userEmail }));
		}
		if (!dateModificator) {
			dispatch(addTask({ ...taskForm, userEmail }));
		}
		setTaskForm(taskInit);
		setShowCreationForm((prev) => !prev);
		setIsOpen(false);
	};

	return (
		<div className="flex flex-col gap-2  relative">
			<article
				className={`${
					dateModificator ? 'h-[7em]' : 'h-[5.5em]'
				} border-[1px] border-[#5855D6]/30 bg-gray-50  mt-3 p-1  rounded-[4px]`}
			>
				<div className="flex h-full gap-2 select-none ">
					<div className="h-full border-l-4 border-gray-500 rounded-xl"></div>
					<div className="flex flex-col  justify-around text-sm text-gray-400">
						<div className="flex gap-1 items-center">
							<AiOutlineCheckSquare />
							<input
								type="text"
								value={taskForm.task.title}
								onChange={(e) =>
									setTaskForm((prev) => ({
										...prev,
										task: { ...prev.task, title: e.target.value },
									}))
								}
								placeholder="Title"
								className=" outline-none text-xs bg-gray-50"
							/>
						</div>
						<div className="flex gap-1 items-center">
							<BiMenu />
							<input
								type="text"
								value={taskForm.task.content}
								onChange={(e) =>
									setTaskForm((prev) => ({
										...prev,
										task: { ...prev.task, content: e.target.value },
									}))
								}
								placeholder="Description"
								className=" outline-none text-xs bg-gray-50"
							/>
						</div>
						<div className="flex gap-1 items-center hover:cursor-pointer">
							<MdOutlineMeetingRoom />
							<input
								type="text"
								placeholder="Attach to meeting"
								readOnly
								className=" outline-none text-xs bg-gray-50 hover:cursor-pointer"
							/>
						</div>
						{dateModificator && (
							<div
								className="flex gap-1 items-center hover:cursor-pointer"
								onClick={() => setShowCalendar((prev) => !prev)}
							>
								<MdDateRange />
								<span className="outline-none text-xs bg-gray-50 hover:cursor-pointer">
									{calendar.format('YYYY MM DD')}
								</span>
							</div>
						)}
					</div>
				</div>
			</article>
			<article className="flex gap-1 justify-end ">
				<button
					className={`${headStyles.button} text-xs text-gray-400`}
					onClick={() => {
						setShowCreationForm((prev) => !prev);
						setIsOpen(false);
					}}
				>
					Cancel
				</button>
				<button
					className={`${headStyles.button} text-xs text-gray-500 bg-gray-200`}
					onClick={createTaskHandler}
				>
					Add task
				</button>
			</article>
			<div className=" absolute top-[5em] left-[7em]">
				{showCalendar && (
					<Calendar setChosenState={setCalendar} chosenState={calendar} />
				)}
			</div>
		</div>
	);
};

export default MyTasksCreateTask;
