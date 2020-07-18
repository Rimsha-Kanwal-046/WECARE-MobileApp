const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmergencySchema = new mongoose.Schema({
  sender_id: {
    type: String,
  },
  sender_name: {
    type: String,
    required: true,
  },
  sender_location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  receiver_id: {
    type: String,
  },
  receiver_name: {
    type: String,
  },
  receiver_device: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  emergencytype: {
    type: String,
  },
});
module.exports = emegency = mongoose.model('emergency', EmergencySchema);
