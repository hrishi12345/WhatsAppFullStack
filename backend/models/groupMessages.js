import mongoose from "mongoose";
const groupMessageSchema = mongoose.Schema({
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.String,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const GroupMessage=mongoose.model('GroupMessage', groupMessageSchema);
export default GroupMessage