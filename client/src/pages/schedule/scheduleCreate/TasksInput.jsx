import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

const TasksInput = ({setIsOpenTask, isOpenTask }) => {

	return (
		<article className="mt-1 flex flex-col gap-[2px] h-fit ">
			<div
				className="flex gap-[2px] w-fit items-center hover:cursor-pointer  select-none"
				onClick={() => setIsOpenTask(!isOpenTask)}
			>
				<h4 className="text-[12px]">Tasks</h4>
				{isOpenTask ? (
					<MdOutlineKeyboardArrowUp className="mt-[1px]" />
				) : (
					<MdOutlineKeyboardArrowDown className="mt-[1px]" />
				)}
			</div>
		</article>
	);
};

export default TasksInput;
