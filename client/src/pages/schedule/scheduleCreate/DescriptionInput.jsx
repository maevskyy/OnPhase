import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
const DescriptionInput = ({ calendarEvent, setCalendarEvent }) => {
	const creation = moment()

	const handlerContent = (e) => {
		setCalendarEvent((prev) => ({
			...prev,
			description: {
				...prev.description,
				id: nanoid(),
				content: e.target.value,
				creationTime: creation.format('dddd, MM MMMM, HH:mm')
			},
		}));
	};
	return (
		<article>
			<h4 className="text-[12px] mb-2">Description</h4>
			<textarea
				className="outline-none h-[10em] resize-none mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
				placeholder="Add description"
				value={calendarEvent.description.content}
				onChange={handlerContent}
			/>
		</article>
	);
};

export default DescriptionInput;
