const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// GET volunteer by name
router.get("/:name", async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne({ name: req.params.name });
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

module.exports = router;
