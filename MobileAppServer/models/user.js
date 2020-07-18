const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  device_id: {
    type: String,
  },

  emergencyno: {
    name1: {
      type: String,
    },
    num1: {
      type: String,
    },
    name2: {
      type: String,
    },
    num2: {
      type: String,
    },
    name3: {
      type: String,
    },
    num3: {
      type: String,
    },
    name4: {
      type: String,
    },
    num4: {
      type: String,
    },
    name5: {
      type: String,
    },
    num5: {
      type: String,
    },
  },

  //emergencyno: [String]
  // emergencyno:
  //   num1: {
  //     type: Number,
  //     unique: true
  //   },
  //   num2: {
  //     type: Number,
  //     unique: true
  //   },
  //   num3: {
  //     type: Number,
  //     unique: true
  //   },
  //   num4: {
  //     type: Number,
  //     unique: true
  //   },
  //   num5: {
  //     type: Number,
  //     unique: true
  //   }
  // }

  // emergencyno: {
  //   type: Array,
  //   maxItems: 5,
  //   uniqueItems: true,
  //   items: {
  //     type: Number
  //   }
  // }
});
module.exports = user = mongoose.model('user', UserSchema);
