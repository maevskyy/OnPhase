import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dateBlock } from '../assets/states';
import axios from 'axios';

export const authUser = createAsyncThunk('user/authUser', async () => {
	const response = await axios.get('/user/fetchUser').then(async (res) => {
		const withoutImage = res.data;
		const image = await axios.get(`/user/getImage/${res.data._id}`);
		return { ...withoutImage, image: image.data.image };
	});
	return response;
});

export const uploadImage = createAsyncThunk(
	'user/uploadImage',
	async (user) => {
		const { _id } = user;
		const response = await axios.patch(`/user/uploadImage/${_id}`, user);
		console.log(user)
		return response.data;
	}
);
export const fetchImage = createAsyncThunk('user/fetchImage', async (id) => {
	const response = await axios.get(`/user/getImage/${id}`);
	console.log(response.data);
	// return response.data;
});

const initialState = {
	user: {
		name: '',
		email: '',
	},
	loading: false,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(authUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(authUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(authUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			})
			.addCase(uploadImage.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(uploadImage.fulfilled, (state, action) => {
				state.user = { ...state.user, image: action.payload };
				state.loading = false;
				state.error = null;
			})
			.addCase(uploadImage.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export default userSlice.reducer;
