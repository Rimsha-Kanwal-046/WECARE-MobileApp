const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  instructions: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
});
module.exports = exercise = mongoose.model('exercise', ExerciseSchema);
