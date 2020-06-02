const express = require('express');
const router = express.Router();
const Auth = require('../../middleware/auth');
const User = require('../../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const { check, validationResult } = require('express-validator/check');

router.get('/', Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Passwaord is required').exists()
  ],
  async (req, res) => {
    console.log('Received');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //see if user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
      }
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
      }

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
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
