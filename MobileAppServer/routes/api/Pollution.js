const express = require('express');
const router = express.Router();
let { PythonShell } = require('python-shell');

var c = '';
// var dy = '';
var ds = '';
var dd = '';
var ed = '';
var hh = '';
router.post('/', function(req, res, next) {
  console.log('request Receieved');
  const { city, disease, dayDifference, endingDay, hour2 } = req.body;

  c = city;
  // dy = days;
  ds = disease;
  dd = dayDifference;
  ed = endingDay;
  hh = hour2;
  console.log(c + ' ' + ' ' + ds + ' ' + dd + ' ' + ed + ' ' + hh);
  res.end('');
});

router.get('/', function(req, res, next) {
  console.log('request Receieved');
  // const { city, days, disease, sensitive } = req.body;

  console.log(
    c +
      ' ' +
      ' ' +
      ds +
      ' ' +
      dd +
      ' ' +
      ed +
      ' ' +
      hh +
      '  this the callback api'
  );

  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: 'C:/Users/Nimra Iftikhar/Documents/final fyp/WECARE/python',

    headers: { 'content-type': 'application/json' },

    args: [c, ds, dd, ed, hh]
  };

  PythonShell.run('test.py', options, function(err, results) {
    if (err) throw err;
    res.send({ express: results });
  });
});

module.exports = router;
