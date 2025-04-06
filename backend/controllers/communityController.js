const Community = require("../models/Community");
const Event = require("../models/Event");

// Register a new community
exports.registerCommunity = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const {
      heading,
      type,
      name,
      members,
      serviceMode,
      requirements,
      description,
      email,
      password,
      phone,
      location,
      website,
      category,
      communication,
    } = req.body;

    // Check if email already exists
    const existingCommunity = await Community.findOne({ email });
    if (existingCommunity) {
      return res.status(400).json({ error: "Email already registered!" });
    }

    // Create new community
    const community = new Community({
      heading,
      type,
      name,
      members,
      serviceMode,
      requirements,
      description,
      email,
      password,
      phone,
      location,
      website,
      category,
      communication,
    });

    await community.save();

    res.status(201).json({ message: "Community registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login community
exports.loginCommunity = async (req, res) => {
    try {
      console.log("Login route hit!"); // Debugging log
      const { email, password } = req.body;
  
      // Check if community exists
      const community = await Community.findOne({ email });
  
      if (!community) {
        return res.status(400).json({ error: "Invalid email or password!" });
      }
  
      console.log("Stored Password:", community.password); // Debugging
      console.log("Entered Password:", password); // Debugging
  
      // Compare passwords (since it's stored in plain text)
      if (community.password !== password) {
        return res.status(400).json({ error: "Invalid email or password!" });
      }
  
      res.status(200).json({ message: "Login successful!", communityId: community._id });
    } catch (error) {
      res.status(500).json({ error: "Error logging in!" });
    }
  };
  
// Get all communities
exports.getAllCommunities = async (req, res) => {
  try {
    console.log("hello");
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching communities" });
  }
};

const mongoose = require("mongoose");

// ✅ Get community by `_id`

exports.getCommunityById = async (req, res) => {
  try {
    const id = req.params.id.trim(); // 🧽 Trim any whitespace
    console.log("Received ID:", id);

    // ✅ Validate ObjectId before using
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const community = await Community.findById(id);

    if (!community) {
      return res.status(404).json({ error: "Community not found" });
    }

    res.json(community);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};



// Update a community
exports.updateCommunity = async (req, res) => {
  try {
    const updatedCommunity = await Community.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommunity) return res.status(404).json({ error: "Community not found" });

    res.status(200).json({ message: "Community updated successfully!", updatedCommunity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a community
exports.deleteCommunity = async (req, res) => {
  try {
    const deletedCommunity = await Community.findByIdAndDelete(req.params.id);
    if (!deletedCommunity) return res.status(404).json({ error: "Community not found" });

    res.status(200).json({ message: "Community deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting community" });
  }
};

exports.createEvent = async (req, res) => {
  console.log("🎯 Inside createEvent controller");
  try {
    const { name, description, date, location } = req.body;
    const { id } = req.params; // ✅ Use 'id' if your route is /:id/event

    console.log("Parsed data:", { name, description, date, location, communityId: id });

    const newEvent = new Event({
      name,
      description,
      date,
      location: {
        lat: location[0],
        lng: location[1],
      },
      communityId: id, // ✅ Use 'id' here
    });

    await newEvent.save();

    console.log("✅ Event saved:", newEvent);

    res.status(201).json({ message: "Event created successfully", event: newEvent });
  } catch (err) {
    console.error("❌ Event creation failed:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllEvents = async (req, res) => {
  console.log("📥 Inside getAllEvents controller");

  try {
    const communityId = req.params.id;
    console.log("🔍 Community ID:", communityId);

    const events = await Event.find({ communityId });

    console.log("✅ Events fetched:", events.length);

    res.status(200).json({
      message: "Events fetched successfully",
      events
    });
  } catch (err) {
    console.error("❌ Failed to fetch events:", err);
    res.status(500).json({
      message: "Server error while fetching events",
      error: err.message
    });
  }
};

