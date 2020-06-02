const express = require('express');
const router = express.Router();
const Emergency = require('../../models/user_emergency');
const User = require('../../models/user');

const auth = require('../../middleware/auth');

/////////////////////////////////////////////////////

router.post('/', async (req, res) => {
  const {
    sender_id,
    sender_name,
    sender_location,
    receiver_id,
    receiver_name,
    receiver_device,
  } = req.body;
  try {
    emergency = new Emergency({
      sender_id: sender_id,
      sender_name: sender_name,
      sender_location: {
        latitude: sender_location.latitude,
        longitude: sender_location.longitude,
      },
      receiver_id: receiver_id,
      receiver_name: receiver_name,
      receiver_device: receiver_device,
    });
    emergency.save();
    res.json(emergency);
    console.log(emergency);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});

//////////////////////////////////////////////////////

// router.post('/', async (req, res) => {
//   const {
//     sender_id,
//     sender_name,
//     sender_location,
//     receiver1_id,
//     receiver1_name,
//     receiver1_device,
//     receiver2_id,
//     receiver2_name,
//     receiver2_device,
//     receiver3_id,
//     receiver3_name,
//     receiver3_device,
//     status,
//   } = req.body;
//   try {
//     emergency = new Emergency({
//       sender_id: sender_id,
//       sender_name: sender_name,
//       sender_location: {
//         latitude: sender_location.latitude,
//         longitude: sender_location.longitude,
//       },
//       receiver1_id: receiver1_id,
//       receiver1_name: receiver1_name,
//       receiver1_device: receiver1_device,
//       receiver2_id: receiver2_id,
//       receiver2_name: receiver2_name,
//       receiver2_device: receiver2_device,
//       receiver3_id: receiver3_id,
//       receiver3_name: receiver3_name,
//       receiver3_device: receiver3_device,
//       status: status,
//     });
//     emergency.save();
//     res.json(emergency);
//     console.log(emergency);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//     return;
//   }
// });
router.get('/', async (req, res) => {
  try {
    const emergency = await Emergency.find();
    res.json(emergency);
  } catch (error) {
    console.log(error);
  }
});

router.post('/getnot', auth, async (req, res) => {
  console.log('req Request Received');
  console.log(req.body.receiver1_id);
  const id = req.body.receiver1_id;
  //console.log(_id);
  try {
    const emergency = await Emergency.findById({ _id: id });
    res.json(emergency);
    console.log(emergency);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:receiver_name', function (req, res, next) {
  const query = req.params.receiver_name;

  Emergency.find({
    receiver_name: query,
  })
    .populate('Emergency')
    .exec(function (error, results) {
      if (error) {
        return next(error);
      }
      // If valid user was not found, send 404
      if (!results) {
        res.status(404).send('No Record Found');
      } else {
        // Respond with valid data
        res.json(results);
      }
    });
});

module.exports = router;
