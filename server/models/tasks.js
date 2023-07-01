import mongoose from 'mongoose';

const taskEventSchema = new mongoose.Schema({
    userEmail: {type: String},
	date: { type: String },
	task: {
		id: { type: String },
		isCompleted: { type: Boolean },
		title: { type: String },
		content: { type: String },
		executor: { type: String },
	},
});

export default mongoose.model('taskEvent', taskEventSchema);

