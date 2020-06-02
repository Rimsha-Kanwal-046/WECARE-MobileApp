const express = require('express');
const router = express.Router();
const Diet = require('../../models/dietplan');
// const config = require('config');
// var multer = require('multer');

router.post('/', async (req, res) => {
  const { calorie, breakfast, lunch, snack, dinner } = req.body;
  try {
    //see if user exists
    // let exercise = await Exercise.findOne({ name });
    // if (exercise) {
    //   return res.status(400).json({
    //     errors: [{ msg: 'exercise already exist' }]
    //   });
    // }

    diet = new Diet({
      calorie: req.body.calorie,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      snack: req.body.snack,
      dinner: req.body.dinner
    });
    diet.save();
    res.json(diet);
    console.log(diet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});
router.get('/', async (req, res) => {
  try {
    const diet = await Diet.find();
    res.json(diet);
  } catch (error) {
    console.log(error);
  }
});

router.post('/get_calorie', async (req, res) => {
  console.log('Diest Request Received');
  let plan_array = [];
  try {
    const diet = await Diet.find();

    diet.map(item => {
      let closest_cal = Math.abs(item.calorie - req.body.calorie);
      plan_array.push({
        _id: item._id,
        calorie: item.calorie,
        breakfast: item.breakfast,
        lunch: item.lunch,
        snack: item.snack,
        dinner: item.dinner,
        closest_cal: closest_cal
      });
    });

    plan_array.sort(function(a, b) {
      return a.closest_cal - b.closest_cal;
    });

    res.json(plan_array[0]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
