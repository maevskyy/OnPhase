import express from "express"
import { createEvent, deleteEvent, changeEvent, fetchEvent, deleteScheduleNote, deleteScheduleTask, toggleCompleteScheduleTask } from "../controllers/schedule.js";


const router = express.Router();

router.post('/create', createEvent)
router.post('/fetch', fetchEvent)
router.patch('/changeEvent', changeEvent)
router.delete('/delete/:id', deleteEvent)
router.patch('/deleteScheduleNote/:id', deleteScheduleNote)
router.patch('/deleteScheduleTask', deleteScheduleTask)
router.patch('/toggleCompleteScheduleTask', toggleCompleteScheduleTask)

export default router
