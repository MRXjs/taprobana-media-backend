const express = require("express");
const AuthController = require("../Controllers/AuthController.js");

const registerUser = AuthController.registerUser;
const loginUser = AuthController.loginUser;

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
