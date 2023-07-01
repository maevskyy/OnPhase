//Icons
import { HiTemplate } from 'react-icons/hi';
import { AiFillCalendar } from 'react-icons/ai';
import { RiStickyNoteFill, RiSettings5Fill } from 'react-icons/ri';
import { FaTasks } from 'react-icons/fa';

//other stuff
import { NavStyles } from '../style';

//pages
import Today from '../pages/today/Today';
import Schedule from '../pages/schedule/Schedule';
import Notes from '../pages/notes/Notes';
import Tasks from '../pages/tasks/Tasks';
import User from '../pages/user/User';

export const navLinks = [
	{
		id: 1,
		title: 'Today',
		page: <Today />,
		link: '/',
		img: <HiTemplate className={`${NavStyles.navIconShape}`} />,
	},
	{
		id: 2,
		title: 'Schedule',
		page: <Schedule />,
		link: '/Schedule',
		img: <AiFillCalendar className={`${NavStyles.navIconShape}`} />,
	},
	{
		id: 3,
		title: 'Notes',
		page: <Notes />,
		link: '/Notes',
		img: <RiStickyNoteFill className={`${NavStyles.navIconShape}`} />,
	},
	{
		id: 4,
		title: 'Tasks',
		page: <Tasks />,
		link: '/Tasks',
		img: <FaTasks className={`${NavStyles.navIconShape}`} />,
	},
	// {
	//   id: 5,
	//   title: 'User',
	//   page: <User />,
	//   link: '/User',
	//   img: <RiSettings5Fill className={`${NavStyles.navIconShape}`} />,
	// },
];

export const daysInWeekArr = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
export const monthInYear = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
export const daysEmoji = [
	{ Monday: '📝' },
	{ Tuesday: '🏃' },
	{ Wednesday: '🧗' },
	{ Thursday: '🙅' },
	{ Friday: '🕺' },
	{ Saturday: '🎊' },
	{ Sunday: '🛌' },
];

const users = [
	{ name: 'roma' },
	{ name: 'platon' },
	{ name: 'mitya' },
	{ name: 'nastya' },
	{ name: 'egor' },
	{ name: 'nika' },
	{ name: 'ilya' },
	{ name: 'stat' },
];