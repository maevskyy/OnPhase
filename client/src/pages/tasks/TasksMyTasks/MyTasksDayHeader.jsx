import { useState } from 'react';
import MyTasksCreateTask from './MyTasksCreateTask';

const MyTasksDayHeader = ({ currentDay, myMoment, setIsOpen }) => {
	const [showCreationForm, setShowCreationForm] = useState(false);
	return (
		<header className="flex flex-col gap-1">
			<div
				className={`${
					currentDay ? 'text-[#5855D6]' : 'text-gray-700'
				} text-xl font-bold tracking-wide`}
			>
				{currentDay ? 'Today' : myMoment.format('dddd')} 
			</div>
			<div
				className={`${
					currentDay
						? 'bg-[#5855D6]/20 text-[#5855D6] font-semibold flex items-center justify-center w-fit rounded-md '
						: 'text-gray-500'
				} text-sm p-1`}
			>
				{currentDay
					? `${myMoment.format('dddd')}, ${myMoment.format('DD MMM')}`
					: myMoment.format('DD MMM')}
			</div>
			<button
				className="p-2 py-3 rounded-md mt-2 text-sm hover:bg-[#5855D6]/10 transition  duration-300"
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
					setIsOpen={setIsOpen}
					myMoment={myMoment}
				/>
			)}
		</header>
	);
};

export default MyTasksDayHeader;
