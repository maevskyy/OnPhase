import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.js'
import scheduleReducer from './schedule.js'
import notesReducer from './notes.js'
import tasksReducer from './tasks.js'


export default configureStore({
    reducer: {
        userReducer,
        scheduleReducer,
        notesReducer,
        tasksReducer
    },
})