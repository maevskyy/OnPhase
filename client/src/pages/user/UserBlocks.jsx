import { FaUserCircle } from 'react-icons/fa';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { TbLanguage } from 'react-icons/tb';

const UserBlocks = ({ value, placeholder }) => {
	let icon = <FaUserCircle className=" text-[#5855D6]/60 text-[1.5em]" />;
	switch (placeholder) {
		case 'Name':
			icon = <FaUserCircle className=" text-[#5855D6]/60 text-[1.5em]" />;
			break;
		case 'Country Region':
			icon = (
				<GiEarthAfricaEurope className=" text-[#5855D6]/60 text-[1.5em]" />
			);
			break;
		case 'Contactable at':
			icon = <AiFillMessage className=" text-[#5855D6]/60 text-[1.5em]" />;
			break;
		case 'Date of Birth':
			icon = (
				<BsFillCalendar2DateFill className=" text-[#5855D6]/60 text-[1.5em]" />
			);
			break;
		case 'Language':
			icon = <TbLanguage className=" text-[#5855D6]/60 text-[1.5em]" />;
			break;
		default:
			break;
	}
	return (
		<div className="bg-white flex justify-between  shadow-md w-[18em] h-[7em] rounded-xl border-2 p-4">
			<div className="flex flex-col gap-2">
				<h3 className="font-semibold text-lg">{placeholder}</h3>
				<h3 className="text-gray-500 text-sm font-semibold">{value}</h3>
			</div>
			{icon}
		</div>
	);
};

export default UserBlocks;
