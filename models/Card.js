const mongoose = require("mongoose");
const Joi = require("joi");
const CardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 100,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
      enum: ["Morocco", "Spain", "France"],
    },
    category: {
      type: String,
      required: true,
      enum: ["Apartment", "Villa", "House", "Hotel", "Riad"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

function validateCreateCard(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(20).required(),
    desc: Joi.string().trim().min(20).max(100).required(),
    price: Joi.number().required(),
    country: Joi.string().valid("Morocco", "Spain", "France").required(),
    category: Joi.string()
      .valid("Apartment", "Villa", "House", "Hotel", "Riad")
      .required(),
    image: Joi.string().required(),
  });
  return schema.validate(obj);
}

function validateUpdateCard(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(20),
    desc: Joi.string().trim().min(20).max(100),
    price: Joi.number(),
    country: Joi.string().valid("Morocco", "Spain", "France"),
    category: Joi.string().valid(
      "Apartment",
      "Villa",
      "House",
      "Hotel",
      "Riad"
    ),
    image: Joi.string(),
  });
  return schema.validate(obj);
}
const Card = mongoose.model("Card", CardSchema);
module.exports = {
  Card,
  validateCreateCard,
  validateUpdateCard,
};
