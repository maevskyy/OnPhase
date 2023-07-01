import { useState } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { nanoid } from '@reduxjs/toolkit';
import { headStyles } from '../../../style';
import { useSelector } from 'react-redux';
const TasksAddField = ({ setCalendarEvent, date, setShowAddTask }) => {
	const userEmail = useSelector((el) => el.userReducer.user.email);
	
	const initTask = {
		date: date.format('YYYY MM DD'),
		task: {
			id: nanoid(),
			isCompleted: false,
			title: '',
			content: '',
			executor: 'You',
		},
	};
	const [taskField, setTaskField] = useState(initTask);
	const saveHandler = () => {
		setCalendarEvent((prev) => ({
			...prev,
			tasks: [
				...prev.tasks,
				{
					...taskField,
					task: {
						...taskField.task,
						executor: taskField.task.executor == 'You' ? userEmail : taskField.task.executor,
					},
				},
			],
		}));
		setTaskField(initTask);
		setShowAddTask((prev) => !prev);
	};
	return (
		<div className="">
			<div className="bg-gray-50 h-[5em] rounded-md p-2 mt-2 flex gap-2 ">
				<div className="h-full border-l-4 border-gray-400 rounded-xl"></div>
				<div className="flex flex-col justify-between text-sm text-gray-400 my-[2px]">
					<div className="flex gap-1 items-center">
						<AiOutlineCheckSquare />
						<input
							type="text"
							value={taskField.task.title}
							onChange={(e) =>
								setTaskField({
									...taskField,
									task: { ...taskField.task, title: e.target.value },
								})
							}
							placeholder="Title"
							className=" outline-none text-xs bg-gray-50"
						/>
					</div>
					<div className="flex gap-1 items-center">
						<BiMenu />
						<input
							type="text"
							value={taskField.task.content}
							onChange={(e) =>
								setTaskField({
									...taskField,
									task: { ...taskField.task, content: e.target.value },
								})
							}
							placeholder="Description"
							className=" outline-none text-xs bg-gray-50"
						/>
					</div>
					<div className="flex gap-1 items-center">
						<BsPeople />
						<input
							type="text"
							value={taskField.task.executor}
							onChange={(e) =>
								setTaskField({
									...taskField,
									task: { ...taskField.task, executor: e.target.value },
								})
							}
							placeholder="Member"
							className=" outline-none text-xs bg-gray-50"
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-1 justify-end mt-2">
				<button
					className={`${headStyles.button} text-xs text-gray-400 `}
					onClick={() => setShowAddTask((prev) => !prev)}
				>
					Cancel
				</button>
				<button
					className={`${headStyles.button} text-xs text-gray-500 bg-gray-200`}
					onClick={saveHandler}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default TasksAddField;
