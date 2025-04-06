const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const http = require("http");

// Load environment variables
dotenv.config();

// DB config
const connectDB = require("./config/db");

// Route imports
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const communityRoutes = require("./routes/communityRoutes");
const ProfileRoutes = require("./routes/ProfileRoutes");
const ActionRoutes = require("./routes/ActionRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes"); // Don't forget this line

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Chat API!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/profile", ProfileRoutes);
app.use("/api/actions", ActionRoutes);
app.use("/api/volunteer", volunteerRoutes);

// Create HTTP server and bind Socket.io
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175", // change to your frontend port if needed
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Socket.io events
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
