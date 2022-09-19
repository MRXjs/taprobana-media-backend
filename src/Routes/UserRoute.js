const express = require("express");
const UserController = require("../Controllers/UserController.js");
const AuthMiddleware = require("../MiddleWare/AuthMiddleware.js");

const getAllUser = UserController.getAllUser;
const getUser = UserController.getUser;
const updateUser = UserController.updateUser;
const deleteUser = UserController.deleteUser;
const followUser = UserController.followUser;
const unFollowUser = UserController.unFollowUser;

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", AuthMiddleware, deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unFollowUser);

module.exports = router;
