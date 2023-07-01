import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../../store/notes';
import { deleteScheduleNote } from '../../store/schedule';

const NotesMainElement = ({ attachedAt, description, mongoId, note }) => {
	const dispatch = useDispatch();
	const noteNote = useSelector((el) => el.notesReducer.notes);
	const scheduleNote = useSelector((el) => el.scheduleReducer.blocks);
	const deleteHandler = (e) => {
		e.preventDefault();
		const isNote = noteNote.find(
			(note) => note.description.id == description.id
		);
		const isSchedule = scheduleNote.find(
			(note) => note.description.id == description.id
		);
		if (isNote) {
			dispatch(deleteNote(mongoId));
		}
		if(isSchedule){
			dispatch(deleteScheduleNote(note))
		}
	};
	return (
		<Link
			to={`${description.id}`}
			className="border-gray-300 bg-white border-[1px] rounded-[4px] w-full h-[5em] hover:shadow-md duration-300 ease-in-out hover:cursor-pointer  hover:translate-y-1"
		>
			<header className="flex justify-between ml-[8px] ">
				<div className="flex gap-2">
					<div className="  font-bold text-[10px] mt-[6px]">
						{description.creationTime.slice(-5)}
					</div>
					<a
						href=""
						className="text-[12px] font-semibold bg-[#5855D6]/20 text-[#5855D6] h-fit px-1 mt-[5px] rounded-md "
					>
						{attachedAt}
					</a>
				</div>
				<div
					className="p-2 hover:bg-[#ee363638] transition duration-300 ease-in-out rounded-sm"
					onClick={deleteHandler}
				>
					<MdOutlineDeleteOutline className="text-[18px]" />
				</div>
			</header>
			<main className="ml-[8px] mt-[-2px]">
				{description.content.slice(0, 20).trim()}
				{description.content.length >= 20 ? '...' : ''}
			</main>
		</Link>
	);
};

export default NotesMainElement;
