const express = require('express');
const router = express.Router();

const User = require('../../models/user');

const auth = require('../../middleware/auth');

router.post('/', auth, async (req, res) => {
  console.log('saving device id');

  const { device_id } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.user.id },
      {
        device_id: device_id
      }
    );
    res.json(device_id);
    console.log('saved id');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});

router.get('/', auth, async (req, res) => {
  console.log('getting device id ');
  try {
    const user = await User.findOne({ _id: req.user.id }).select('-password');
    res.json(user.device_id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
