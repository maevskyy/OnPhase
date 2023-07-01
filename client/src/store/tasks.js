import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllTasks = createAsyncThunk(
	'tasks/getAllTasks',
	async (email) => {
		const response = await axios.post('/tasks/fetch', { email: email });
        return response.data
	}
);

export const addTask = createAsyncThunk('tasks/createTask', async (event) => {
	const response = await axios.post('/tasks/createTask', event);
	return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async(id) => {
	const response = await axios.delete(`/tasks/deleteTask/${id}`)
	return response.data
})

export const toggleComplete = createAsyncThunk('/tasks/toggleComplete', async(task) => {
	const response = await axios.patch('/tasks/toggleComplete', task)
	return response.data
})

const initialState = {
	tasks: [],
	loading: false,
	error: null,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addTask.fulfilled, (state, action) => {
				state.tasks = [...state.tasks, action.payload];
			})
			.addCase(getAllTasks.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllTasks.fulfilled, (state, action) => {
				state.tasks = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getAllTasks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})
			.addCase(deleteTask.fulfilled, (state, action) => {
				state.tasks = state.tasks.filter((task) => task._id !== action.payload);
			})



			.addCase(toggleComplete.fulfilled, (state, action) => {
				state.tasks = state.tasks.map((task) => {
					if (task._id === action.payload._id) {
						return action.payload
					}
					return task
				})
				state.loading = false;
				state.error = null;
			})
	},
});

export default tasksSlice.reducer;
