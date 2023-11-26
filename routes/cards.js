const express = require("express");
const router = express.Router();

const {
  createCard,
  getAllCards,
  getCardById,
  updateCardById,
  deleteCardById,
} = require("../controllers/cardController");

router.route("/").get(getAllCards).post(createCard);
router
  .route("/:id")
  .get(getCardById)
  .put(updateCardById)
  .delete(deleteCardById);

module.exports = router;
