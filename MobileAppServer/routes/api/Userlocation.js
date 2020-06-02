const express = require('express');
const router = express.Router();

const User = require('../../models/user');

const auth = require('../../middleware/auth');

router.post('/', auth, async (req, res) => {
  console.log('location request');

  const { location } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.user.id },
      {
        location: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      }
    );
    res.json('location saved');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});

router.get('/', auth, async (req, res) => {
  console.log('location request received');
  try {
    const user = await User.findOne({ _id: req.user.id }).select('-password');
    res.json(user.location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
