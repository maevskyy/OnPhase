import express from "express"
import { createTask, fetchTasks, deleteTask, toggleComplete } from "../controllers/tasks.js";


const router = express.Router();

router.post('/createTask', createTask)
router.post('/fetch', fetchTasks)
router.delete('/deleteTask/:id', deleteTask )
router.patch('/toggleComplete', toggleComplete)


export default router
