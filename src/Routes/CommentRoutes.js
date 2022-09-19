const express = require("express");
const CommentController = require("../Controllers/CommentController.js");

const createComment = CommentController.createComment;
const getComments = CommentController.getComments;
const deleteComment = CommentController.deleteComment;
const updateComment = CommentController.updateComment;

const router = express.Router();

router.post("/create", createComment);
router.get("/get", getComments);
router.delete("/delete/:id", deleteComment);
router.put("/update/:id", updateComment);

module.exports = router;
