import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { BsCalendar } from 'react-icons/bs';
import { NavStyles } from '../../../style';
import { daysEmoji } from '../../../assets/constants';
import TodayNavMain from './TodayNavMain';

const TodayNav = (props) => {
	const { today, plusDay, minusDay, resetToday } = props;
	const rightEmoji = daysEmoji.filter(
		(obj) => Object.keys(obj) == today.format('dddd')
	);
	const result = rightEmoji[0];
	return (
		<div className="w-2/6 border-r-[1px] py-6 pl-6 pb-6 bg-white">
			<header className="mr-6 flex justify-between select-none flex-wrap">
				<div className="flex gap-[6px]">
					<div className="text-[30px] w-[1.5em]">{Object.values(result)}</div>
					<div className="flex flex-col">
						<h3 className="font-semibold text-lg flex">
							{today.format('dddd')}	
						</h3>
						<div className="flex items-center text-xs font-semibold text-red-500">
							<AiOutlineLeft
								onClick={minusDay}
								className="hover:cursor-pointer"
							/>
							<h4 className="w-[6.5em] select-none flex justify-center">
								{today.format('DD MMM YYYY')}
							</h4>
							<AiOutlineRight
								onClick={plusDay}
								className="hover:cursor-pointer"
							/>
						</div>
					</div>
				</div>
				<div className="flex bg-gray-100 p-1 gap-1 items-center justify-end rounded-md">
					<div className="px-3 py-2 border-[1px] rounded-md bg-white shadow-md">
						<CiViewList className={`${NavStyles.navIconShape} text-black`} />
					</div>
					<div className="px-3 py-2 bg-gray-50 rounded-md border-[1px]">
						<BsCalendar className={`${NavStyles.navIconShape} text-black`} />
					</div>
				</div>
			</header>
            <TodayNavMain resetToday={resetToday} today={today}/>
		</div>
	);
};

export default TodayNav;
