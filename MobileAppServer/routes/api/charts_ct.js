const express = require('express');
const router = express.Router();
let { PythonShell } = require('python-shell');

s1 = [];

router.post('/', function (req, res, next) {
  console.log('request Receieved');
  const { symptoms } = req.body;

  s1 = symptoms;

  console.log(s1);
  res.end('');
});

router.get('/', function (req, res, next) {
  console.log('this the callback api charts ct');

  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: 'D:/FYP/WECARE-MobileApp/MobileAppServer/python',

    headers: { 'content-type': 'application/json' },
  };

  PythonShell.run('charts_ct.py', options, function (err, results) {
    if (err) throw err;
    res.send({ express: results });
  });
});

module.exports = router;
