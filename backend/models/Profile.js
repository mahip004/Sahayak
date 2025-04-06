const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  username: String,
  joinedDate: String,
  role: String,
  avatar: String,
  stats: [
    {
      label: String,
      value: mongoose.Schema.Types.Mixed,
    },
  ],
  courses: [
    {
      name: String,
      progress: Number,
    },
  ],
  badges: [
    {
      name: String,
      style: String,
    },
  ],
  activity: [String],
});

module.exports = mongoose.model("Profile", ProfileSchema);
