const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
    username: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;
