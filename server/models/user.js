import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country : { type: String, required: false },
  image : { type: String },
  birthday: { type: String, required: false},
  language: { type: String, required: false },
});

export default mongoose.model('User', userSchema);
