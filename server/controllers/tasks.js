import tasksEvent from '../models/tasks.js'

export const createTask = async (req, res) => {
    const event = req.body
    try {
        const createdNote = await tasksEvent.create(event)
        res.status(200).json(createdNote)
    } catch (error) {
        res.status(404).json({message: 'проблемы с createTask у tasksEvent'})

    }
}

export const fetchTasks = async (req, res) => {
    const {email} = req.body
    try {
        const allEvents = await tasksEvent.find({userEmail: email})
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(404).json({message: 'проблемы с fetch у tasksEvent'})
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
	try {
		const deleteEvent = await tasksEvent.deleteOne({ _id: id });
		if (deleteEvent.deletedCount == 0)
			return res.status(404).json({ message: 'event not found' });
		return res.status(200).json(id);
	} catch (error) {
		res.status(404).json({ message: 'проблемы с deleteTask у tasksEvent' });
	}
}

export const toggleComplete = async (req, res) => {
    const task = req.body
    try {
        const updatedTask = await tasksEvent.findByIdAndUpdate(task._id, task, {new: true})
        res.status(200).json(updatedTask)
        
    } catch (error) {
        res.status(404).json({message: 'проблемы с toggleComplete у tasksEvent'})

    }
}