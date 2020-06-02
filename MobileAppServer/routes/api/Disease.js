const express = require('express');
const router = express.Router();
let { PythonShell } = require('python-shell');

s1 = [];

router.post('/', function(req, res, next) {
  console.log('request Receieved');
  const { symptoms } = req.body;

  s1 = symptoms;

  console.log(s1);
  res.end('');
});
router.get('/', function(req, res, next) {
  console.log(s1 + 'this the callback api');

  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    //C:/Users/HP/PycharmProjects/FYP
    // 'E:/Mern-Projects/WECARE/python'
    scriptPath: 'C:/Users/Nimra Iftikhar/Documents/final fyp/WECARE/python',

    //	scriptPath: 'C:/Users/HP/PycharmProjects/FYP',
    headers: { 'content-type': 'application/json' },

    args: [s1]
  };

  PythonShell.run('disease.py', options, function(err, results) {
    if (err) throw err;
    res.send({ express: results });
  });
});

module.exports = router;
