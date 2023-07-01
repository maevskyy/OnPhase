import { useState } from 'react';
import NotesMainElement from './NotesMainElement';
import moment from 'moment';
import { filteringDates } from '../../assets/functions';

const NotesMain = ({ blocksWithDescription, notes }) => {
	const rightDates = filteringDates([...blocksWithDescription, ...notes]);
	return (
		<div
			className="mx-[5.5em] h-[80%] mt-[1.5em] flex flex-col gap-3 "
			id="scrollbar"
		>
			{rightDates.map((dateBlock) => (
				<div key={dateBlock.date}>
					<section className="w-fit border-b-[1px] mb-3  font-semibold text-[18px] pb-1 border-black">
						<div className="">{moment(dateBlock.date).format('MMMM DD')}</div>
					</section>
					<section className="flex gap-3 flex-col">
						{dateBlock.blocks.map((note) => {
							if (note.description.content == '') {
								return;
							}
							return (
								<NotesMainElement
									key={note.description.id}
									attachedAt={note.title}
									description={note.description}
									mongoId={note._id}
									note={note}
								/>
							);
						})}
					</section>
				</div>
			))}
		</div>
	);
};

export default NotesMain;
