const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Thought = require('./Thought');


var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};


// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 20,
    },
    email: {
      type: String,
      max_length: 50,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [Thought],
    friends: [User],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// virtual retrieves length of friends array.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})



const User = model('User', userSchema);

module.exports = User;
