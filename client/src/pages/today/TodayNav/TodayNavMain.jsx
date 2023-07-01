import { useSelector } from 'react-redux';
import TodayNavElement from './TodayNavElement';

const TodayNavMain = ({ resetToday, today }) => {
	const blocks = useSelector((el) => el.scheduleReducer.blocks);
	const currentDay = blocks.filter(
		(block) => block.date == today.format('YYYY MM DD')
	);

	return (
		<main className="mt-6 flex flex-col gap-2 h-[90%]" id="scrollbar">
			{currentDay.length == 0 ? (
				<div className="flex w-full items-center  ">
					<div className="h-[1px] w-[72%] border-[1px] " />
					<button
						onClick={resetToday}
						className="text-xs w-[5em] hover:font-semibold"
					>
						Back to today
					</button>
				</div>
			) : (
				<>
					{currentDay.map((block) => (
						<TodayNavElement
							key={block.id}
                            today={today}
                            fullInfo={block}
							// setContent={setContent}
							// content={content}

						/>
					))}
				</>
			)}
		</main>
	);
};

export default TodayNavMain;
