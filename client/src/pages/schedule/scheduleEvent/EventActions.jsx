import { MdOutlineDeleteOutline } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { deleteScheduleEvent } from '../../../store/schedule';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { SchedulePopUp } from '../../../components/context/schedulePopUpcontext';

const PopupActions = ({ setEventPopUp, setCreatePopUp, eventPopUp }) => {
	const toggle = useContext(SchedulePopUp);
	const dispatch = useDispatch();
	const changeHandler = (data) => {
		setCreatePopUp((prev) => ({
			info: data,
			condition: !prev.condition,
		}));
	};
	const deleteHandler = (_) => {
		dispatch(deleteScheduleEvent(eventPopUp.blockInfo._id));
		toggle((prev) => !prev);
	};

	return (
		<section className="flex gap-4 justify-end">
			<div className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer duration-300 ease-in-out">
				<MdOutlineDeleteOutline className="text-lg " onClick={deleteHandler} />
			</div>
			<div
				className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer  duration-300 ease-in-out"
				onClick={() => changeHandler(eventPopUp)}
			>
				<AiOutlineEdit className="text-lg " />
			</div>
			<div className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer  duration-300 ease-in-out">
				<GrClose
					className="text-lg "
					onClick={() =>
						setEventPopUp((prev) => ({ ...prev, condition: false }))
					}
				/>
			</div>
		</section>
	);
};

export default PopupActions;
