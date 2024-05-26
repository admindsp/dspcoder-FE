const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const SubtopicSchema = new mongoose.Schema({
  name: String,
  questions: [QuestionSchema],
});

const TopicSchema = new mongoose.Schema({
  name: String,
  subtopics: [SubtopicSchema],
});

module.exports = mongoose.model("Topic", TopicSchema);
