const express = require("express");
const ChatController = require("../Controllers/ChatController.js");

const createChat = ChatController.createChat;
const userChats = ChatController.userChats;
const findChat = ChatController.findChat;

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);

module.exports = router;
