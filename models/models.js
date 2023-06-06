const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
    ref: 'User',
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
});

const ReactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);
const Thought = mongoose.model('Thought', ThoughtSchema);
const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = { User, Thought, Reaction };
