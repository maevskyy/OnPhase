import TodayContentTasksEvent from './TodayContentTasksEvent';
const TodayContentTasks = ({ allTasks, plsWtfIsThis }) => {
	return (
		<main className="flex flex-col gap-5 h-full">
			<button className="text-sm rounded-[4px] px-3 py-2 text-[#5855D6] shadow-sm bg-white w-[6em]">
				Add task
			</button>
			{allTasks.map((taskEl) => (
				<TodayContentTasksEvent taskEl={taskEl} key={taskEl.id} plsWtfIsThis={plsWtfIsThis}  />
			))}
		</main>
	);
};

export default TodayContentTasks;
