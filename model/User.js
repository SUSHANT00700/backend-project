const mongoose = require('mongoose')

const User = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Must provide Username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must provide password"],
    trim: true,
    minLength: [5, "Minimum length 5 required"],
  },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
});

module.exports = mongoose.model('User',User)