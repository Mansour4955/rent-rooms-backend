const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
connectToDB();

// process.env.NODE_ENV production, development

app.use("/api/cards", require("./routes/cards"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
