import mongoose from 'mongoose';

const noteEventSchema = new mongoose.Schema({
  userEmail: {type: String},
  date: {type: String},
  description: {
    id: {type: String},
    content: {type: String},
    creationTime: {type: String}
  }
});

export default mongoose.model('noteEvent', noteEventSchema);


