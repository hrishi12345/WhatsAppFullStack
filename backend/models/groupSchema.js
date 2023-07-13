import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Group = mongoose.model('Group', groupSchema);
export default Group;
