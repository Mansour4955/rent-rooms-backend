const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/db");
const app = express();
app.use(express.json());

connectToDB()

// process.env.NODE_ENV production, development

app.use("/api/cards", require("./routes/cards"))

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))