const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', async (req, res) => {
  const c_lat = 33.650114;
  const c_lon = 73.155721;

  try {
    let nearby_user = [];
    const urs = await User.find();
    urs.map(item => {
      let la = item.location.latitude;
      let ln = item.location.longitude;

      let d = Math.sqrt(Math.pow(la - c_lat, 2) + Math.pow(ln - c_lon, 2));
      nearby_user.push({
        id: item._id,
        name: item.name,
        distance: d,
        location: item.location,
        device_id: item.device_id
      });
    });

    nearby_user.sort(function(a, b) {
      return a.distance - b.distance;
    });
    nearby_user.splice(5, nearby_user.length - 1);
    res.json(nearby_user);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);

  const { name, email, password } = req.body;
  try {
    //see if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: 'User already exist' }]
      });
    }

    user = new User({ name, email, password });

    //password encryption
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get('jwtToken'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    console.log('sent');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});

module.exports = router;
