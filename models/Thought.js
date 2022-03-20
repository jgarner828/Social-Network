const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');


// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      maxlength: 280,
    },
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      maxlength: 20,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
      reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
      }]
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

module.exports = {Thought, thoughtSchema};
