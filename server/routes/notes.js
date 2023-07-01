import express from 'express';
// import { createEvent, deleteEvent, changeEvent, fetchEvent } from "../controllers/schedule.js";
import {fetchNote, createNote, changeNote, deleteNote } from '../controllers/notes.js';

const router = express.Router();

router.post('/fetch', fetchNote);
router.post('/create', createNote);
router.patch('/changeNote', changeNote);
router.delete('/deleteNote/:id', deleteNote)


// router.post('/create', createEvent)
// router.post('/fetch', fetchEvent)
// router.delete('/delete/:id', deleteEvent)

export default router;
