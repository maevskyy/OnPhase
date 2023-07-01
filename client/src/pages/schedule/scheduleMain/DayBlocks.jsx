import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { SchedulePopUp } from '../../../components/context/schedulePopUpcontext';

const DayBlocks = ({ weeks, hoursObj, setEventPopUp, eventPopUp }) => {
	const mainState = useSelector((el) => el.scheduleReducer.blocks);
	const toggle = useContext(SchedulePopUp);
	return (
		<article className="flex w-full">
			{/* pain */}
			{weeks.map((el) => (
				<div className="relative w-full h-full" key={el.format('YYYY MM DD')}>
					{hoursObj().map((_, index) => (
						<div
							key={index}
							className="w-[100%] h-[7.2%] border-gray-300 border-[1px]"
						></div>
					))}
					{mainState.map((obj) => {
						if (obj.date === el.format('YYYY MM DD')) {
							return (
								<article
									key={obj.id}
									className="w-full absolute flex  justify-center"
									style={{
										top: `${obj.hourFromPx}`,
										bottom: `${obj.hourTillPx}`,
									}}
									onClick={() =>
										toggle((prev) => ({
											condition: !prev.condition,
											blockInfo: obj,
										}))
									}
								>
									<div className="bg-white w-[93%] text-gray-500 hover:cursor-pointer  justify-center flex items-center shadow-md p-1  rounded-md ">
										{obj.title}
									</div>
								</article>
							);
						}
						// 	if (obj.calendarCards.length != 0) {
						// 		return obj.calendarCards.map((card) => (
						// 			<article
						// 				key={card.id}
						// 				className="w-full absolute flex  justify-center"
						// 				style={{
						// 					top: `${card.hourFromPx}`,
						// 					bottom: `${card.hourTillPx}`,
						// 				}}
						// 				onClick={() =>
						// 					setEventPopUp({
						// 						condition: !eventPopUp.condition,
						// 						info: card,
						// 					})
						// 				}
						// 			>
						// 				<div className="bg-white w-[93%] text-gray-500 hover:cursor-pointer  justify-center flex items-center shadow-md p-1  rounded-md ">
						// 					{card.title}
						// 				</div>
						// 			</article>
						// 		));
						// 	}
						// }
					})}
				</div>
			))}
			-
		</article>
	);
};

export default DayBlocks;
