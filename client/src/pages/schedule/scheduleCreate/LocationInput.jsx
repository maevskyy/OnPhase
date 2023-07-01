
const LocationInput = ({ setCalendarEvent, calendarEvent }) => {
	return (
		<article>
			<h4 className="text-[12px] mb-2">Location</h4>
			<select
				className="mb-1  hover:cursor-pointer first-letter:border-gray-300 border-[1px] outline-none w-full rounded-sm  placeholder:italic text-[12px] p-[.3em] px-[1em]"
				onChange={(e) =>
					setCalendarEvent({ ...calendarEvent, location: e.target.value })
				}
			>
				<option value={`Google Meet`}>Google Meet</option>
				<option value={`Zoom`}>Zoom</option>
				<option value={`Teams`}>Teams</option>
				<option value={`Others`}>Others</option>
				<option value={`In person`}>In person</option>
			</select>
			<input
				value={calendarEvent.locationLink}
				onChange={(e) =>
					setCalendarEvent({ ...calendarEvent, locationLink: e.target.value })
				}
				type="text"
				className="mb-1 first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]"
				placeholder="Add meeting link"
			/>
		</article>
	);
};

export default LocationInput;
