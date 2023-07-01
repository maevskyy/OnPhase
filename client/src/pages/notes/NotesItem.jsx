import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdArrowDropleft } from 'react-icons/io';
import { headStyles } from '../../style';
import moment from 'moment';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, changeNote } from '../../store/notes';
import { changeScheduleNote } from '../../store/schedule';

const NotesItem = () => {
	const { id } = useParams();
	const noteObj = {
		date: moment().format('YYYY MM DD'),
		description: {
			id: id,
			content: '',
			creationTime: moment().format('dddd, MM MMMM, HH:mm'),
		},
	};
	const notesReducer = useSelector((el) => el.notesReducer.notes);
	const scheduleReducer = useSelector((el) => el.scheduleReducer.blocks);
	const userEmail = useSelector(el => el.userReducer.user.email)
	const dispatch = useDispatch();
	const existingNote = notesReducer.find((note) => note.description.id == id);
	const exisiingInSchedule = scheduleReducer.find(
		(block) => block.description.id == id
	);
	const isNote = exisiingInSchedule ? exisiingInSchedule : existingNote;
	const [note, setNote] = useState(isNote ? isNote : noteObj);

	const exitNote = () => {
		if (note.description.content == '') {
			return
		}
		if (exisiingInSchedule) {
			dispatch(changeScheduleNote(note));
		}
		if (existingNote) {
			dispatch(changeNote(note));
		}
		if (!existingNote && !exisiingInSchedule) {
			dispatch(addNote({...note, userEmail}));
		}
	};
	return (
		<div className="h-[100vh] w-full">
			<header className="bg-white shadow-lg w-full p-4 px-10 flex justify-between items-center select-none">
				<section className="flex gap-2 items-center">
					<Link
						to="/Notes"
						onClick={exitNote}
						className={`${headStyles.button} hover:bg-[#5855D6]/20 flex items-center`}
					>
						<IoMdArrowDropleft className="text-[16px]" />
						Back
					</Link>
					<div className="h-[2em] w-1 border-l-[1px] border-gray-400 mr-2"></div>
					<div className="flex text-[12px] flex-col">
						<div className="font-bold">
							{note.description.content.slice(0, 15).trim()}
							{note.description.content.length >= 15 ? '...' : ''}
						</div>
						<div className="">{note.description.creationTime}</div>
					</div>
				</section>
				<section>
					{note.title ? (
						<div className={`${headStyles.button} bg-[#5855D6]/20`}>
							{note.title}
						</div>
					) : (
						<div className={`${headStyles.button} bg-[#5855D6]/20`}>
							Attach to meeting
						</div>
					)}
				</section>
			</header>
			<main className="mx-[1.6em] h-[83%] border-gray-300 border-[1px] shadow-md  rounded-lg bg-white mt-[1.5em] flex flex-col justify-between">
				<section className="border-b-[1px] p-5"></section>
				<textarea
					className="h-full outline-none resize-none bg-white px-3 py-2 text-[14px]"
					placeholder="Start typing"
					value={note.description.content}
					onChange={(e) =>
						setNote((prev) => ({
							...prev,
							description: { ...prev.description, content: e.target.value },
						}))
					}
				></textarea>
				<section className="border-t-[1px] p-5"></section>
			</main>
		</div>
	);
};

export default NotesItem;
