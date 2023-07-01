import { headStyles } from '../../style.js';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ScheduleHeader = (props) => {
	const { reset, minus, plus, startWeekDay, endWeekDay, setCreatePopUp } = props;
	return (
		<header className="bg-white shadow-lg w-full p-4 px-10 flex justify-between select-none">
			<section className="flex gap-2 items-center">
				<button
					onClick={reset}
					className={`${headStyles.button} bg-[#5855D6]/20`}
				>
					Today
				</button>
				<div className="flex gap-1 text-xs font-semibold items-center ">
					<BsChevronLeft className="hover:cursor-pointer" onClick={minus} />
					<h4 className="w-[8em] justify-center flex">
						{startWeekDay.format('MMM DD')} - {endWeekDay.format('MMM DD')}
					</h4>
					<BsChevronRight className="hover:cursor-pointer" onClick={plus} />
				</div>
			</section>
			<section>
				<button
					className={`${headStyles.button} hover:bg-[#5855D6]/20`}
					onClick={() => setCreatePopUp(prev => !prev)}
				>
					Create Event
				</button>
			</section>
		</header>
	);
};

export default ScheduleHeader;
