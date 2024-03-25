const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router
  .get("/", usersController.getAllUsers)
  .post("/", usersController.createUser);

module.exports = router;
