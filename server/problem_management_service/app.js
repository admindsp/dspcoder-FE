require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 8001;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.get("/xyz", async (req, res) => {
  try {
    res.status(200).json({ message: "CHOLCHE" });
  } catch (error) {
    res.status(500).json({ message: "GG" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
