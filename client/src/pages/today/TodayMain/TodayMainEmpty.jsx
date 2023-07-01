import { headStyles } from '../../../style';
import computer from '../../../assets/images/testOneComputer.png';
import logo from '../../../assets/images/v2.png';
import { Link } from 'react-router-dom';

const TodayMainEmpty = () => {
	return (
		<div className="flex w-full">
			<section className="w-2/6 border-r-[1px] border-gray-300 p-6  items-center pt-[6em] flex flex-col">
				<h3 className="font-bold text-xl tracking-wide">
					No Meetings for today 🙌
				</h3>
				<div className="flex flex-col justify-start mt-[2.5em] gap-3">
					<h5 className="text-[17.5px] font-semibold text-gray-700">
						Collaborate with your team using OnPhase
					</h5>
					<span className="text-xs text-gray-700">✍️ Take meeting notes</span>
					<span className="text-xs text-gray-700">
						✅ Use @name to Assign action items
					</span>
					<span className="text-xs text-gray-700">
						↪️ Send Notes, Email or Notions
					</span>
					<Link
						to="/Schedule"
						className={`${headStyles.button} bg-[#5855D6]/20 mt-3 w-fit`}
					>
						Create new metting
					</Link>
				</div>
				<img src={computer} className="w-[12em] mt-[5em] mr-[2em]" alt="" />
			</section>
			<section className="w-full">
				<img src={logo} alt="" />
			</section>
		</div>
	);
};

export default TodayMainEmpty;
