const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  title: String,
  date: String,
  feedbackCount: Number,
});

const volunteerSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bio: String,
  location: String,
  email: String,
  contactLinks: {
    linkedin: String,
    github: String,
  },
  volunteerSince: String,
  coursesTaught: Number,
  topics: [String],
  totalStudents: Number,
  avgRating: Number,
  badges: [String],
  upcomingSessions: [sessionSchema],
  pastSessions: [sessionSchema],
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
