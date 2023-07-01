import calendarEvent from '../models/calendarEvent.js';

export const fetchEvent = async (req, res) => {
	const { email } = req.body;
	try {
		const allEvents = await calendarEvent.find({ userEmail: email });
		res.status(200).json(allEvents);
	} catch (error) {
		res.status(404).json({ message: 'проблемы с fetch у calendarevent' });
	}
};
export const createEvent = async (req, res) => {
	const event = req.body;
	try {
		const createdEvent = await calendarEvent.create(event);
		res.status(200).json(createdEvent);
	} catch (error) {
		res.status(404).json({ message: 'проблемы с createEvent у calendarevent' });
	}
};
export const deleteEvent = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteEvent = await calendarEvent.deleteOne({ _id: id });
		if (deleteEvent.deletedCount == 0)
			return res.status(404).json({ message: 'event not found' });
		return res.status(200).json(id);
	} catch (error) {
		res.status(404).json({ message: 'проблемы с deleteEvent у calendarevent' });
	}
};
export const changeEvent = async (req, res) => {
	const event = req.body;
	try {
		const updatedEvent = await calendarEvent.findByIdAndUpdate(
			event._id,
			event,
			{ new: true }
		);
		res.status(200).json(updatedEvent);
	} catch (error) {
		res.status(404).json({ message: 'проблемы с changeEvent у calendarevent' });
	}
};

export const deleteScheduleNote = async (req, res) => {
	const { id } = req.params;
	const event = req.body;
	try {
		const updatedEvent = await calendarEvent.findByIdAndUpdate(
			{ _id: id },
			{
				...event,
				description: {
					...event.description,
					id: event.description.id,
					content: '',
				},
			},
			{ new: true }
		);
		res.status(200).json(updatedEvent);
	} catch (error) {
		res
			.status(404)
			.json({ message: 'проблемы с deleteScheduleNote у calendarevent' });
	}
};

export const deleteScheduleTask = async (req, res) => {
	const { event } = req.body;
	try {
		const updatedEvent = await calendarEvent.findByIdAndUpdate(
			{ _id: event._id },
			event,
			{ new: true }
		);
		if (!updatedEvent) {
			return res.status(404).json({ message: 'Event not found' });
		}

		res.status(200).json(updatedEvent);
	} catch (error) {
		res
			.status(500)
			.json({ message: 'проблемы с deleteScheduleTask у calendarevent' });
	}
};

export const toggleCompleteScheduleTask = async (req, res) => {
	const { event } = req.body;
	try {
		const updatedEvent = await calendarEvent.findByIdAndUpdate(
			{ _id: event._id },
			event,
			{ new: true }
		);
		if (!updatedEvent) {
			return res.status(404).json({ message: 'Event not found' });
		}

		res.status(200).json(updatedEvent);
	} catch (error) {
		res.status(404).json({
			message: 'проблемы с toggleCompleteScheduleTask у calendarevent',
		});
	}
};
