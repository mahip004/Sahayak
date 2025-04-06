const express = require("express");
const router = express.Router();
const communityController = require("../controllers/communityController");

// Define community routes
router.post("/register", communityController.registerCommunity);
router.post("/login", (req, res, next) => {
   
    next();
  }, communityController.loginCommunity);
  
  
router.get("/fetchAll", communityController.getAllCommunities);
router.get("/fetchone/:id", communityController.getCommunityById);
router.post("/:id/event", communityController.createEvent);
router.get("/:id/eventAll", communityController.getAllEvents);
router.put("/:id", communityController.updateCommunity);
router.delete("/:id", communityController.deleteCommunity);

module.exports = router;
