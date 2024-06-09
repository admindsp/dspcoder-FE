const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
  image: { type: Array, default: [] },
});

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  questionType: { type: String, required: true },
  keywords: { type: [String], default: [] },
  questionImages: { type: Array, default: [] },
  examples: { type: [exampleSchema], default: [] },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
