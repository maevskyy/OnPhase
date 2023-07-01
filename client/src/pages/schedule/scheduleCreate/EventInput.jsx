const EventInput = ({ calendarEvent, inputsHandler }) => {
	return (
		<article>
			<input
				type="text"
				name="title" // user_name
				className={`border-gray-300 border-[1px] w-full outline-none rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"`}
				placeholder="Add meeting title"
				value={calendarEvent.title}
				onChange={inputsHandler}
			/>
		</article>
	);
};

export default EventInput;
