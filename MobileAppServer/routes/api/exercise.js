const express = require('express');
const router = express.Router();
const Exercise = require('../../models/exercises');
// const config = require('config');
// var multer = require('multer');

router.post('/', async (req, res) => {
  const { name, category, instructions, img } = req.body;
  try {
    //see if user exists
    // let exercise = await Exercise.findOne({ name });
    // if (exercise) {
    //   return res.status(400).json({
    //     errors: [{ msg: 'exercise already exist' }]
    //   });
    // }

    exercise = new Exercise({
      name: req.body.name,
      category: req.body.category,
      instructions: req.body.instructions,
      img: req.body.img
    });
    exercise.save();
    res.json(exercise);
    console.log(exercise);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    return;
  }
});
router.get('/', async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.json(exercise);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  // console.log('getting emergency no');
  try {
    let exercise = await Exercise.findOne({ name });
    if (exercise) {
      res.json(exercise);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
