import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllNotes = createAsyncThunk(
	'notes/getAllNotes',
	async (email) => {
		const response = await axios.post('/notes/fetch', { email: email });
		return response.data;
	}
);
export const addNote = createAsyncThunk('notes/addNote', async (note) => {
	const response = await axios.post('/notes/create', note);
	return response.data;
});
export const changeNote = createAsyncThunk('notes/changeNote', async (note) => {
	const response = await axios.patch('/notes/changeNote', note);
	return response.data;
});
export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
	const response = await axios.delete(`/notes/deleteNote/${id}`);
	return response.data;
});

const initialState = {
	notes: [],
	loading: false,
	error: null,
};

export const notesSlice = createSlice({
	name: 'notes',
	initialState,
	extraReducers: (builer) => {
		builer
			.addCase(addNote.fulfilled, (state, action) => {
				state.notes = [...state.notes, action.payload];
			})
			.addCase(getAllNotes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllNotes.fulfilled, (state, action) => {
				state.notes = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getAllNotes.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})
			.addCase(changeNote.fulfilled, (state, action) => {
				state.notes = state.notes.map((note) => {
					if (note.description.id === action.payload.description.id) {
						return action.payload;
					}
					return note;
				});
				state.loading = false;
				state.error = null;
			})
			.addCase(deleteNote.fulfilled, (state, action) => {
				state.notes = state.notes.filter((note) => note._id !== action.payload);
			});
	},
});

export default notesSlice.reducer;
