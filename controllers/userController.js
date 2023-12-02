const asyncHandler = require("express-async-handler");
const {
  User,
  validateUpdateUser,
  validateRegisterUser,
  validateLoginUser,
} = require("../models/User");
/**
 * @desc Get All Users
 * @Route /api/users
 * @method GET
 * @access private
 */
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

/**
 * @desc Get User By Id
 * @Route /api/users/:id
 * @method GET
 * @access private
 */
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

/**
 * @desc Update User By Id
 * @Route /api/users/:id
 * @method PUT
 * @access private
 */
const updateUser = asyncHandler(async (req, res) => {
  const { error } = validateUpdateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      },
    },
    { new: true }
  );
  res.status(200).json(user);
});

/**
 * @desc Register User
 * @Route /api/users
 * @method POST
 * @access private
 */
const registerUser = asyncHandler(async (req, res) => {
  const { error } = validateRegisterUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // let
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "this email already registered" });
  }

  user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  const result = await user.save();
  res.status(201).json(result);
});

/**
 * @desc Login User
 * @Route /api/users
 * @method POST
 * @access private
 */
const loginUser = asyncHandler(async (req, res) => {
  const { error } = validateLoginUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "invalid email" });
  }
  const isPasswordMatch = (await user.password) === req.body.password;
  if (!isPasswordMatch) {
    return res.status(400).json({ message: "invalid password" });
  }
  // const { password, ...other } = user 
  res.status(200).json(user);
});

/**
 * @desc Delete User
 * @Route /api/users/:id
 * @method DELETE
 * @access private
 */
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user has been deleted" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  registerUser,
  deleteUser,
  loginUser,
};
