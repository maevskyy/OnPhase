import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  originalname: String,
  path: String,
});

const Image = mongoose.model('Image', imageSchema);

export default Image;