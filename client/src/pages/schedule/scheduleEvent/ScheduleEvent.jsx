import EventActions from './EventActions'
import EventContent from './EventContent'
import { useSelector } from 'react-redux';
const ScheduleEvent = ({eventPopUp, setEventPopUp, setCreatePopUp}) => {
const main = useSelector(el => el.scheduleReducer.blocks)
console.log(main)
	return (
		<div className="bg-white py-3 pl-7 pr-4 pb-10 rounded-lg shadow-2xl h-fit top-[30%] left-[30%] flex flex-col   w-[30em] absolute ">
        <EventActions setEventPopUp={setEventPopUp} setCreatePopUp={setCreatePopUp} eventPopUp={eventPopUp}/>
        <EventContent eventPopUp={eventPopUp}/>
		</div>
	);
};

export default ScheduleEvent;

