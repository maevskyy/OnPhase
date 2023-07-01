import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addScheduleEvent = createAsyncThunk(
	'schedule/addScheduleEvent',
	async (event) => {
		const { userEmail } = event;
		await axios.post('/schedule/create', event);
		const response = await axios.post('/schedule/fetch', { email: userEmail });
		return response.data;
	}
);
export const getAllSchedule = createAsyncThunk(
	'schedule/getAllSchedule',
	async (email) => {
		const response = await axios.post('/schedule/fetch', { email: email });
		return response.data;
	}
);

export const deleteScheduleEvent = createAsyncThunk(
	'schedule/deleteScheduleEvent',
	async (id) => {
		const response = await axios.delete(`/schedule/delete/${id}`);
		return response.data;
	}
);

export const changeScheduleNote = createAsyncThunk(
	'schedule/changeEvent',
	async (event) => {
		const response = await axios.patch('/schedule/changeEvent', event);
		return response.data;
	}
);
export const deleteScheduleNote = createAsyncThunk(
	'schedule/deleteScheduleNote',
	async (event) => {
		const response = await axios.patch(
			`/schedule/deleteScheduleNote/${event._id}`,
			{ ...event }
		);
		return response.data;
	}
);

export const deleteScheduleTask = createAsyncThunk(
	'schedule/deleteScheduleTask',
	async (event) => {
		const response = await axios.patch(`/schedule/deleteScheduleTask`, {
			event,
		});
		return response.data;
	}
);

export const toggleCompleteScheduleTask = createAsyncThunk(
	'schedule/toggleCompleteScheduleTask',
	async (event) => {
		const response = await axios.patch(`/schedule/toggleCompleteScheduleTask`, {
			event,
		});
		return response.data;
	}
);

const initialState = {
	blocks: [],
	loading: false,
	error: null,
};

export const scheduleSlice = createSlice({
	name: 'schedule',
	initialState,
	extraReducers: (builder) => {
		builder
			//
			.addCase(addScheduleEvent.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addScheduleEvent.fulfilled, (state, action) => {
				state.blocks = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(addScheduleEvent.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})

			.addCase(getAllSchedule.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllSchedule.fulfilled, (state, action) => {
				state.blocks = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getAllSchedule.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})
			.addCase(deleteScheduleEvent.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteScheduleEvent.fulfilled, (state, action) => {
				state.blocks = state.blocks.filter((el) => el._id !== action.payload);
				state.loading = false;
				state.error = null;
			})
			.addCase(deleteScheduleEvent.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})
			.addCase(changeScheduleNote.fulfilled, (state, action) => {
				state.blocks = state.blocks.map((note) => {
					if (note.description.id === action.payload.description.id) {
						return action.payload;
					}
					return note;
				});
				state.loading = false;
				state.error = null;
			})

			//!this is so bad, ill fix it later

			.addCase(deleteScheduleTask.fulfilled, (state, action) => {
				state.blocks = state.blocks.map((obj) => {
					if (obj._id === action.payload._id) {
						return action.payload;
					}
					return obj;
				});
				state.loading = false;
				state.error = null;
			})

			.addCase(toggleCompleteScheduleTask.fulfilled, (state, action) => {
				state.blocks = state.blocks.map((obj) => {
					if (obj._id === action.payload._id) {
						return action.payload;
					}
					return obj;
				});
				state.loading = false;
				state.error = null;
			});


	},
});

export default scheduleSlice.reducer;
