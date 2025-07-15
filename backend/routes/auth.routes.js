const express = require("express");
const { signupUser } = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signupUser);

module.exports = router;
