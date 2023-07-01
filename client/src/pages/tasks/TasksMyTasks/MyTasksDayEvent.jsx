import { useState } from 'react';
import {
	AiOutlineCheckSquare,
	AiFillCheckSquare,
	AiFillDelete,
	AiOutlineDelete,
} from 'react-icons/ai';
import { deleteTask as deletetask, toggleComplete } from '../../../store/tasks';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteScheduleTask,
	toggleCompleteScheduleTask,
} from '../../../store/schedule';

const MyTasksDayEvent = ({ info }) => {
	const dispatch = useDispatch();
	const currentEvent = useSelector((el) => el.tasksReducer.tasks).find(
		(taskEl) => taskEl._id === info._id
	);
	const [istFiveAmInTheMorning, setIsFiveAmInTheMorning] =
		useState(currentEvent);
	const [deleteStyle, setDeleteStyle] = useState(false);
	const [anotherStateForTask, setAnotherStateForTask] = useState('');

	const toggleForComplete = (myId) => {
		if (info.assign) {
			// //! im tired, sorry for this code
			setAnotherStateForTask({date: info.date, task: {...info.task, isCompleted: !info.task.isCompleted}})

			dispatch(toggleCompleteScheduleTask({...info.obj, tasks: info.obj.tasks.map(el => {
				if (el.task.id == anotherStateForTask.task.id) {
					return anotherStateForTask
				}
				return el
			})}))
			
			// return console.log(anotherStateForTask);
			return;
			// setToggleComplete((prev) => ({
			// 	...prev,
			// 	task: {
			// 		...prev.task,
			// 		isCompleted: !prev.task.isCompleted,
			// 	},
			// }));

		}
		setIsFiveAmInTheMorning((prev) => ({
			...prev,
			task: {
				...prev.task,
				isCompleted: !prev.task.isCompleted,
			},
		}));
		dispatch(toggleComplete(istFiveAmInTheMorning));
	};

	const deleteTask = () => {
		if (info.assign) {
			return dispatch(
				deleteScheduleTask({
					...info.obj,
					tasks: info.obj.tasks.filter((el) => el.task.id !== info.task.id),
				})
			);
		}
		dispatch(deletetask(info._id));
	};

	return (
		<article className="flex flex-col gap-2 hover:shadow-md duration-300 ease-in-out hover:cursor-pointer  hover:translate-y-1">
			<div className="border-[1px] border-[#5855D6]/30 bg-white mt-3 p-1 h-[5.5em] max-h-[8em] rounded-[4px] flex">
				<div className="h-full border-l-4 border-red-300 rounded-xl"></div>
				<div className="flex justify-between w-full mx-2">
					<div className="flex flex-col justify-between ">
						<span className="text-gray-600 tracking-wide text-[15px] font-semibold mt-1">
							{info.task.title}
						</span>
						<span className="text-[14px] font-semibold bg-[#5855D6]/20 text-[#5855D6] h-fit px-1 mt-[5px] w-fit rounded-md mb-1">
							{info?.assign}
						</span>
					</div>
					<div className="flex flex-col justify-between my-2">
						<div onClick={() => toggleForComplete(info.task.id)}>
							{info.task.isCompleted ? (
								<AiFillCheckSquare className="text-lg text-green-600" />
							) : (
								<AiOutlineCheckSquare className="text-lg " />
							)}
						</div>
						<div
							onMouseEnter={() => setDeleteStyle(true)}
							onMouseLeave={() => setDeleteStyle(false)}
						>
							{deleteStyle ? (
								<AiFillDelete
									className="text-lg text-red-500"
									onClick={deleteTask}
								/>
							) : (
								<AiOutlineDelete className="text-lg" />
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default MyTasksDayEvent;
