import NotesHeader from './NotesHeader';
import { useSelector } from 'react-redux';
import NotesMainEmpty from './NotesMainEmpty';
import NotesMain from './NotesMain';

const Notes = () => {
	const notesState = useSelector((el) => el.notesReducer);
	const scheduleState = useSelector((el) => el.scheduleReducer);
	const blocksWithDescription = scheduleState.blocks.filter(
		(block) => block.description !== ''
	);
  console.log(notesState)
	return (
		<div className="flex flex-col w-full h-[100vh]">
			<NotesHeader />
			{notesState.loading || scheduleState.loading ? (
				<div className="">Loading</div>
			) : (
				<>
					{notesState.notes.length == 0 && blocksWithDescription.length == 0 ? (
						<NotesMainEmpty />
					) : (
						<NotesMain
							blocksWithDescription={blocksWithDescription}
							notes={notesState.notes}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default Notes;
