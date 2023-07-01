import mongoose from 'mongoose';

const calendaEventSchema = mongoose.Schema({
	id: { type: String, required: true },
	title: { type: String },
	date: { type: String },
	moment: { type: String },
	userEmail: {type: String},
	hourFrom: { type: String },
	hourTill: { type: String },
	hourFromPx: { type: String },
	hourTillPx: { type: String },
	guests: { type: Array },
	location: { type: String },
	locationLink: { type: String },
	description: {
		id: {type: String},
		content: {type: String},
		date: {type: String},
		creationTime: {type: String}
	 },
	remindAt: { type: String },
	tasks: {type: Array}
});

export default mongoose.model('CalendarEvent', calendaEventSchema);
