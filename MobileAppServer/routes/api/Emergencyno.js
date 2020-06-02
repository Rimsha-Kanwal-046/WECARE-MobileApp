const express = require('express');
const router = express.Router();

const User = require('../../models/user');

const auth = require('../../middleware/auth');

router.post('/', auth, async (req, res) => {
  console.log('saving emergency numbers');

  const { emergencyno } = req.body;
  try {
    let array = [];
    const user = await User.findByIdAndUpdate(
      { _id: req.user.id },

      {
        emergencyno: {
          name1: emergencyno.name1,
          num1: emergencyno.num1,
          name2: emergencyno.name2,
          num2: emergencyno.num2,
          name3: emergencyno.name3,
          num3: emergencyno.num3
        }
      }
    );

    res.json(emergencyno);
  } catch (err) {
    console.error(err.message);
    res.send("Number can't be less or exceed 11 digit");
    res.status(500).send('Server error');
    return;
  }
});

router.get('/', auth, async (req, res) => {
  console.log('getting emergency no');
  try {
    const user = await User.findOne({ _id: req.user.id }).select('-password');
    res.json(user.emergencyno);
    // let number = [];
    // number.push(user.emergencyno);
    // console.log(number);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
