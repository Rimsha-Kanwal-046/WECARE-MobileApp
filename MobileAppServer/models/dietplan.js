const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DietSchema = new mongoose.Schema({
  calorie: {
    type: Number,
    required: true
  },
  breakfast: {
    type: String
  },
  lunch: {
    type: String
  },
  snack: {
    type: String
  },
  dinner: {
    type: String
  }
});
module.exports = diet = mongoose.model('diet', DietSchema);
