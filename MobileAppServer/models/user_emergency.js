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
  // receiver1_id: {
  //   type: Schema.Types.ObjectId,
  // },
  // receiver1_name: {
  //   type: String,
  // },
  // receiver1_device: {
  //   type: String,
  // },
  // receiver2_id: {
  //   type: String,
  // },
  // receiver2_name: {
  //   type: String,
  // },
  // receiver2_device: {
  //   type: String,
  // },
  // receiver3_id: {
  //   type: String,
  // },
  // receiver3_name: {
  //   type: String,
  // },
  // receiver3_device: {
  //   type: String,
  // },
  // status: {
  //   type: String,
  // },
});
module.exports = emegency = mongoose.model('emergency', EmergencySchema);
