import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import TasksAddField from './TasksAddField'
import TasksEvent from './TasksEvent';
import TasksInput from './TasksInput';
import RACIinput from './RACIinput';
const EventGuest = ({ guests,setCalendarEvent, date, tasks }) => {
	const handleKeyDown = (e) => e.key === 'Enter' && addGuest();
	const [guestEmail, setGuestEmail] = useState('');
	const [isOpenTask, setIsOpenTask] = useState(false);
	const [isOpenRACI, setIsOpenRACI] = useState(false);
    const [showAddTask, setShowAddTask] = useState(false)
	const addGuest = () => {
		if (guestEmail === '' || guestEmail === ' ' || guestEmail === '  ') {
			return guestEmail.trim();
		}
        setCalendarEvent((prev) => ({
            ...prev,
            guests: [...guests, guestEmail],
          }));
          setGuestEmail('');
	};
    const deleteUser = (name) => {
        setCalendarEvent((prev) => ({
          ...prev,
          guests: guests.filter(elName => elName !== name),
        }));
      } 

	return (
		<article>
			<h4 className="text-[12px] mb-2">Add guests</h4>
			<input
				value={guestEmail}
				className={` mb-1  overflow-hidden resize-none  outline-none first-letter:border-gray-300 border-[1px] w-full rounded-sm placeholder:italic text-[12px] p-[.3em] px-[1em]`}
				placeholder={'Add guest'}
				onChange={(e) => setGuestEmail(e.target.value)}
				onKeyDown={handleKeyDown}
				// onKeyUp={keyUpHandler}
			/>
			<div className="flex gap-2 flex-wrap">
				{guests.map((el, i) => (
					<div
						className=" bg-[#5855D6]/20 text-[#5855D6] font-semibold pl-2 rounded-full flex items-center gap-2 text-[10px] p-1"
						key={i}
					>
						<span>{el}</span>
						<div
							onClick={() => deleteUser(el)}
							className="p-1 rounded-full hover:bg-[#5855D6]/20 hover:cursor-pointer"
						>
							<GrClose />
						</div>
					</div>
				))}
			</div>
			<div className="flex gap-1">
			<TasksInput isOpenTask={isOpenTask} setIsOpenTask={setIsOpenTask}/>
			<RACIinput isOpenRACI={isOpenRACI} setIsOpenRACI={setIsOpenRACI}/>
			</div>
			{isOpenTask && (
				<div className="flex flex-col w-full">
					<button onClick={() => setShowAddTask(!showAddTask)} className="p-1 py-2 hover:bg-gray-100 text-gray-600 mt-1 w-full text-center text-xs transition duration-300 rounded-md">
						Add task
					</button>
                    {showAddTask && (
                        <TasksAddField setCalendarEvent={setCalendarEvent} date={date} setShowAddTask={setShowAddTask}/>
                    )}
                    {tasks.length !== 0 && (
                        <div className="flex flex-col gap-2 mt-2">
                            {tasks.map(el => (
								<TasksEvent key={el.id} info={el.task} setCalendarEvent={setCalendarEvent}/>
                            ))}
                        </div>
                    )}
				</div>
			)}
			{/* {isOpenRACI && (
				<div className="">raci</div>
			)} */}
		</article>
	);
};

export default EventGuest;
