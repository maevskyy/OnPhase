import noteEvent from "../models/noteEvent.js";

export const fetchNote = async (req, res) => {
    const {email} = req.body
    try {
        const allEvents = await noteEvent.find({userEmail: email})
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(404).json({message: 'проблемы с fetch у noteEvent'})
    }
}

export const createNote = async(req, res) => {
    const event = req.body
    try {
        const createdNote = await noteEvent.create(event)
        res.status(200).json(createdNote)
    } catch (error) {
        res.status(404).json({message: 'проблемы с createNote у noteEvent'})

    }
}

export const changeNote = async(req, res) => {
    const note = req.body
    try {
        const updatedNote = await noteEvent.findByIdAndUpdate(note._id, note, {new: true})
        res.status(200).json(updatedNote)
        
    } catch (error) {
        res.status(404).json({message: 'проблемы с changeNote у noteEvent'})

    }
}

export const deleteNote = async (req, res) => {
    const {id} = req.params
    try {
        const deleteEvent = await noteEvent.deleteOne({_id: id});
        if (deleteEvent.deletedCount == 0) return res.status(404).json({message: "event not found"}) 
        return res.status(200).json(id)
    } catch (error) {
        res.status(404).json({message: 'проблемы с deleteEvent у calendarevent'})

    }
}
