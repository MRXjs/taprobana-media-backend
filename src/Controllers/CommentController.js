const CommentModel = require("../Models/CommentModel.js");

// CreateComment
const createComment = async (req, res) => {
  const { postId, body, username, userId, profileImg, parentId } = req.body;
  const Comment = new CommentModel({
    postId,
    body,
    username,
    userId,
    profileImg,
    parentId,
  });
  try {
    const result = await Comment.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// getComment
const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// deleteComment
const deleteComment = async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await CommentModel.findById(commentId);
    if (comment) {
      await comment.deleteOne();
      res.status(200).json("Comment deleted");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update Comment
const updateComment = async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await CommentModel.findByIdAndUpdate(commentId, req.body, {
      new: true,
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createComment: createComment,
  getComments: getComments,
  deleteComment: deleteComment,
  updateComment: updateComment,
};
