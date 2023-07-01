import { useSelector, useDispatch } from 'react-redux';
import TodayMain from './TodayMain/TodayMain';
import TodayMainEmpty from './TodayMain/TodayMainEmpty';
import { AiOutlineLoading } from 'react-icons/ai';

const Today = () => {
	const scheduleState = useSelector((el) => el.scheduleReducer);
	return (
		<>
			{scheduleState.loading ? (
				<div className="flex gap-1">
					<AiOutlineLoading className="animate-spin h-[1em] w-[1em]" />
					<span>Processing...</span>
				</div>
			) : (
				<>
					{scheduleState.blocks.length == 0 ? (
						<TodayMainEmpty />
					) : (
						<TodayMain />
					)}
				</>
			)}
		</>
	);
};

export default Today;
