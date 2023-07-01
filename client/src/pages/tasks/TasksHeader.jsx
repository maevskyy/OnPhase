import moment from 'moment';
import { headStyles } from '../../style';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
const TasksHeader = ({
	reset,
	minus,
	plus,
	startWeekDay,
	endWeekDay,
	isMyTasks,
	setIsMyTasks,
}) => {
	moment.updateLocale('en', { week: { dow: 1 } });
	const currentStartWeek = moment().startOf('week').format('YYYY MM DD');
	return (
		<header className="bg-white shadow-lg w-full p-4 px-10 flex justify-between items-center select-none">
			<section className="flex gap-2 items-center ">
				<button
					onClick={() => setIsMyTasks((prev) => !prev)}
					className={`${headStyles.button} ${
						isMyTasks ? 'text-black/50 bg-gray-100 ' : 'bg-[#5855D6]/20'
					}`}
				>
					All Tasks
				</button>
				<button
					onClick={() => setIsMyTasks((prev) => !prev)}
					className={`${headStyles.button} ${
						isMyTasks ? 'bg-[#5855D6]/20' : 'text-black/50 bg-gray-100 '
					}`}
				>
					My Tasks
				</button>
				{isMyTasks && (
					<>
						<div className="flex gap-1 text-xs font-semibold items-center ">
							<BsChevronLeft className="hover:cursor-pointer" onClick={minus} />
							<h4 className="w-[8em] justify-center flex">
								{startWeekDay.format('MMM DD')} - {endWeekDay.format('MMM DD')}
							</h4>
							<BsChevronRight className="hover:cursor-pointer" onClick={plus} />
						</div>
						{currentStartWeek !== startWeekDay.format('YYYY MM DD') && (
							<button
								onClick={reset}
								className={`${headStyles.button} bg-[#5855D6]/20`}
							>
								Today
							</button>
						)}
					</>
				)}
			</section>
		</header>
	);
};

export default TasksHeader;
