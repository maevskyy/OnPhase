import {
	AiOutlineCheckSquare,
	AiFillCheckSquare,
	AiFillDelete,
	AiOutlineDelete,
} from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteScheduleTask,
	toggleCompleteScheduleTask,
} from '../../../store/schedule';

const TodayContentTasksEvent = ({ taskEl, plsWtfIsThis }) => {
	const dispatch = useDispatch();
	const [toggleComplete, setToggleComplete] = useState(taskEl);
	const [deleteStyle, setDeleteStyle] = useState(false);
	const deleteHandler = (myId) => {
		dispatch(
			deleteScheduleTask({
				...plsWtfIsThis,
				tasks: plsWtfIsThis.tasks.filter((el) => el.task.id !== myId),
			})
		);
	};

	const toggleCompletedHandler = () => {
		//! im tired, sorry for this code
		setToggleComplete((prev) => ({
			...prev,
			task: {
				...prev.task,
				isCompleted: !prev.task.isCompleted,
			},
		}));
		dispatch(toggleCompleteScheduleTask({...plsWtfIsThis, tasks: plsWtfIsThis.tasks.map(el => {
			if (el.task.id == toggleComplete.task.id) {
				return toggleComplete
			}
			return el
		})}))
	};

	return (
		<div className="border-gray-300 bg-white border-[1px] p-1 flex items-center gap-2 rounded-[4px] w-full h-[4em] hover:shadow-md duration-300 ease-in-out  hover:translate-y-1">
			<div className="h-full border-l-4 border-red-300 rounded-xl ml-1" />
			<div className="flex justify-between w-full mx-2  tracking-wide items-center">
				<div className="flex gap-5 items-center text-gray-600 text-lg">
					{taskEl.task.isCompleted ? (
						<AiFillCheckSquare
							className="hover:cursor-pointer text-2xl text-green-400"
							onClick={toggleCompletedHandler}
						/>
					) : (
						<AiOutlineCheckSquare
							className="hover:cursor-pointer text-2xl"
							onClick={toggleCompletedHandler}
						/>
					)}
					<span className="font-semibold ">{taskEl.task.title}</span>
				</div>
				<div className="flex gap-[15em]">
					<span className="text-sm text-gray-600">{taskEl.task.executor}</span>
					<div
						className="hover:cursor-pointer"
						onMouseEnter={() => setDeleteStyle(true)}
						onMouseLeave={() => setDeleteStyle(false)}
					>
						{deleteStyle ? (
							<AiFillDelete
								className="text-lg text-red-500"
								onClick={() => deleteHandler(taskEl.task.id)}
							/>
						) : (
							<AiOutlineDelete className="text-lg" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodayContentTasksEvent;
