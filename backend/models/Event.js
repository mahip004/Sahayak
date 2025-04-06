const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: {
    lat: Number,
    lng: Number,
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
    required: true
  }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
