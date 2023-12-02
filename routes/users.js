const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUsers);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
