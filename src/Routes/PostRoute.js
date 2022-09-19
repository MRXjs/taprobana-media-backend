const express = require("express");
const PostController = require("../Controllers/PostController.js");

const createPost = PostController.createPost;
const getPost = PostController.getPost;
const updatePost = PostController.updatePost;
const deletePost = PostController.deletePost;
const likePost = PostController.likePost;
const getTimelinePosts = PostController.getTimelinePosts;

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

module.exports = router;
