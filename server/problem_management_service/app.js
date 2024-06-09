const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const Problem = require("./models/Problem");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

dbConnect();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post(
  "/api/upload",
  upload.fields([{ name: "questionImages" }, { name: "examples[].image" }]),
  async (req, res) => {
    try {
      const data = req.body;
      const files = req.files;

      const problem = new Problem({
        title: data.title,
        description: data.description,
        difficulty: data.difficulty,
        questionType: data.questionType,
        keywords: data.keywords || [],
        questionImages: files["questionImages"] || [],
        examples: data.examples.map((example, index) => ({
          input: example.input,
          output: example.output,
          image: files[`examples[${index}].image`] || [],
        })),
      });
      console.log(problem);
      await problem.save();
      res.status(200).json({ message: "Problem uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
