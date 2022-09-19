const express = require("express");
const MessageController = require("../Controllers/MessageController.js");

const addMessage = MessageController.addMessage;
const getMessages = MessageController.getMessages;

const router = express.Router();

router.post("/", addMessage);
router.get("/:chatId", getMessages);

module.exports = router;
