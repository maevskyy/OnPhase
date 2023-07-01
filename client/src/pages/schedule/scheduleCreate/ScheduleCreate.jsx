import { useState, useRef, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { scheduleDefEvenState } from '../../../assets/states';
import { useDispatch, useSelector } from 'react-redux';
import { addScheduleEvent } from '../../../store/schedule';
import EventInput from './EventInput';
import EventDateTime from './EventDateTime';
import EventGuest from './EventGuest';
import LocationInput from './LocationInput';
import DescriptionInput from './DescriptionInput';
import SaveButton from './SaveButton';
import moment from 'moment';
import { nanoid } from '@reduxjs/toolkit';
import TasksInput from './TasksInput';

const ScheduleCreate = ({ setCreatePopUp }) => {
	const [calendarEvent, setCalendarEvent] = useState(scheduleDefEvenState);
	const userEmail = useSelector(el => el.userReducer.user.email)
	const dispatch = useDispatch()
	const [reminder, setReminder] = useState('30:00')
	const formRef = useRef();
	const inputsHandler = (e) => {
		setCalendarEvent({ ...calendarEvent, [e.target.name]: e.target.value });
	};
	const tableDateHandler = (date) => {
		setCalendarEvent({ ...calendarEvent, date });
	};
	const saveHandler = (e) => {
		e.preventDefault();
		//! wtf is this lol
		if (calendarEvent.title === '' || calendarEvent.description === '' || calendarEvent.locationLink === '') {
			return;
		}
		// emailjs.sendForm('service_7pb6f4z', 'template_zuyfn74', formRef.current, 'vjF8-n6LjJM2pbO6J')
		dispatch(addScheduleEvent({...calendarEvent, date: calendarEvent.date.format('YYYY MM DD'), userEmail}))
		setCalendarEvent(scheduleDefEvenState);
		setCreatePopUp(prev => !prev)
		// setCreatePopUp((prev) => ({ ...prev, condition: !prev.condition }));
	};
	useEffect(() => {
		setCalendarEvent({...calendarEvent, id: nanoid()})
	}, [setCreatePopUp])

	console.log(moment().format('HH:mm'));
	return (
		<div
			className="absolute p-5 top-0 right-0 h-full bg-white z-40 w-[20em] shadow-xl flex flex-col gap-[1.5em]  overflow-auto"
			id="scrollbar"
		>
			<article className="flex justify-between items-center">
				<h3>Create Event</h3>
				<GrClose
					className="w-[.8em] h-[.8em] hover:cursor-pointer"
					onClick={() => setCreatePopUp((prev) => !prev)}
				/>
			</article>
			<form ref={formRef} className=" flex flex-col gap-[1.5em]" onSubmit={saveHandler}>
				<EventInput calendarEvent={calendarEvent} inputsHandler={inputsHandler}
				/>
				<EventDateTime
					inputsHandler={inputsHandler}
					calendarEvent={calendarEvent}
					tableDateHandler={tableDateHandler}
					setCalendarEvent={setCalendarEvent}
					setReminder={setReminder}
				/>
				<EventGuest
					guests={calendarEvent.guests}
					inputsHandler={inputsHandler}
					setCalendarEvent={setCalendarEvent}
					date={calendarEvent.date}
					tasks={calendarEvent.tasks}
				/>
				<LocationInput calendarEvent={calendarEvent} setCalendarEvent={setCalendarEvent}/>
				<DescriptionInput calendarEvent={calendarEvent} setCalendarEvent={setCalendarEvent}/>
				<SaveButton saveHandler={saveHandler}/>
			</form>
		</div>
	);
};

export default ScheduleCreate;
