const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  questionText: { type: String, required: true },
  image: { type: String },
  options: [String], 
});

const ResponseSchema = new mongoose.Schema({
  answers: [{ questionId: String, answer: mongoose.Schema.Types.Mixed }],
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String },
  questions: [QuestionSchema],
  responses: [ResponseSchema],
});

module.exports = mongoose.model('Form', FormSchema);