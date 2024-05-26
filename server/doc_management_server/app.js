const express = require("express");

const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const Topic = require("./models/Topic");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8004;

dbConnect();

app.use(cors());
app.use(express.json());

app.get("/api/topics", async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({ success: true, data: topics });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.get("/api/topics/:id", async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res
        .status(404)
        .json({ success: false, message: "Topic not found" });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
