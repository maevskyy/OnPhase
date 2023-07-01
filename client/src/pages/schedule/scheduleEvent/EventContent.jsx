import { MdOutlineSubtitles, MdDateRange } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { SiGooglemeet } from 'react-icons/si';

const PopupContent = ({ eventPopUp }) => {
	const { title, hourFrom, hourTill, guests, locationLink, location, description } =
		eventPopUp.blockInfo;
	return (
		<section className="flex flex-col gap-2">
			<div className="flex gap-2 items-center">
				<MdOutlineSubtitles />
				<h1 className="text-2xl font-semibold  mb-2">{title}</h1>
			</div>
			<div className="flex gap-2 items-center">
				<MdDateRange />
				<h1 className="text-md">
					{description.creationTime.slice(0, -7)} / {hourFrom}-{hourTill}
				</h1>
			</div>
			<div className="flex gap-2 items-center">
				<BsPeople />
				<h1 className="text-sm w-[15em]">
					{guests.length ? guests.map((el) => `\n${el},`) : 'You'}
				</h1>
			</div>
			<div className="flex gap-2 items-center">
				<SiGooglemeet />
				<a href={locationLink} className="hover:text-blue-800" target="_blank">
					{location}
				</a>
			</div>
		</section>
	);
};

export default PopupContent;
