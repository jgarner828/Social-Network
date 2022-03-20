const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date('Sept 24, 22 13:20:18').toDateString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


const Reaction = model('Reaction', reactionSchema);


module.exports = Reaction;
