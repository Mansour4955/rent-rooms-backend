const mongoose = require("mongoose");
const Joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 20,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

const validateUpdateUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(7).email(),
    username: Joi.string().trim().min(6).max(20),
    password: Joi.string().trim().min(6).max(20),
  });
  return schema.validate(obj);
};
const validateRegisterUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(7).email().required(),
    username: Joi.string().trim().min(6).max(20).required(),
    password: Joi.string().trim().min(6).max(20).required(),
  });
  return schema.validate(obj);
};
const validateLoginUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(7).email().required(),
    password: Joi.string().trim().min(6).max(20).required(),
  });
  return schema.validate(obj);
};
module.exports = {
  User,
  validateRegisterUser,
  validateUpdateUser,
  validateLoginUser,
};
