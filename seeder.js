const { cards, users } = require("./data");
const { Card } = require("./models/Card");

const connectToDB = require("./config/db");
const { User } = require("./models/User");
require("dotenv").config();

connectToDB();

const importCards = async () => {
  try {
    await Card.insertMany(cards);
    console.log("Cards imported");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const deleteCards = async () => {
  try {
    await Card.deleteMany();
    console.log("Cards deleted!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
const importUsers = async () => {
  try {
    await User.insertMany(users);
    console.log("users imported");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-import") {
  importCards();
} else if (process.argv[2] === "-delete") {
  deleteCards();
} else if (process.argv[2] === "import-users"){
  importUsers()
}
