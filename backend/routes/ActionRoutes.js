const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/enroll/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const enrolledStat = user.stats.find(stat => stat.label === "Courses Enrolled");
    if (enrolledStat && typeof enrolledStat.value === 'number') {
      enrolledStat.value += 1;
    }

    await user.save();
    res.json({ message: "✅ Enrolled count updated", updatedValue: enrolledStat.value });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
