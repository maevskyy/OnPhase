import { useState } from 'react';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';

const TasksEvent = ({ info, setCalendarEvent }) => {
	const [deleteStyle, setDeleteStyle] = useState(false);
    const deleteTaskHandler = () => {
        setCalendarEvent(prev => ({
            ...prev,
            tasks: prev.tasks.filter(taslEl => taslEl.task.id !== info.id)
        }))
    }
	return (
		<div className="flex gap-2 hover:shadow-md duration-300 ease-in-out  p-1 select-none  hover:translate-y-1 h-[2em] rounded-[4px] border-[#5855D6]/30 border-[1px] ">
			<div className="h-full border-l-4 border-red-300 rounded-xl"></div>
			<div className="flex justify-between w-full items-center">
				<div className="text-gray-600 tracking-wide text-[13px]  font-semibold">
					{info.title.length > 8 ? info.title.slice(0, 8).trim() : info.title}
					{info.title.length > 8 && '..'}
				</div>
				<div className="flex gap-4">
					<div className=" text-gray-600 tracking-wide text-[9px]">
						{info.executor.length > 30
							? info.executor.slice(0, 30).trim()
							: info.executor}
						{info.executor.length > 30 && '..'}
					</div>
					<div
						className="mr-2 hover:cursor-pointer"
						onMouseEnter={() => setDeleteStyle(true)}
						onMouseLeave={() => setDeleteStyle(false)}
					>
						{deleteStyle ? (
							<AiFillDelete onClick={deleteTaskHandler} className="text-sm  text-red-500" />
						) : (
							<AiOutlineDelete className="text-sm" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TasksEvent;
