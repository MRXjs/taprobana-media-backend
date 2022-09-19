const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
    },
    body: {
      type: String,
    },
    username: {
      type: String,
    },
    userId: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    parentId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
