const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;