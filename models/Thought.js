const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const User = require('./User');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    username: 
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      reactions: [reactionSchema]
  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual retrieves length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})



const Thought = model('thought', thoughtSchema);

module.exports = Thought;
