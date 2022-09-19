const ChatModel = require("../Models/ChatModel.js");

const createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const isChatHave = await ChatModel.find({
      members: [req.body.senderId, req.body.receiverId],
    });

    if (isChatHave.length === 0) {
      const result = await newChat.save();
      await ChatModel.deleteOne({
        members: [req.body.receiverId, req.body.senderId],
      });

      res.status(200).json(result);
    } else {
      res.status(404).json("Chat is already have 🖐");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    req.status(500).json(error);
  }
};

module.exports = {
  createChat: createChat,
  userChats: userChats,
  findChat: findChat,
};
