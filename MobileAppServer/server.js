const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/key').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Mongo Connected...');
  })
  .catch((err) => console.log(err));

//Use Routers
app.use('/api/User', require('./routes/api/User'));

app.use('/api/Auth', require('./routes/api/Auth'));
app.use('/api/exercise', require('./routes/api/exercise'));
app.use('/api/diet', require('./routes/api/diet'));
app.use('/api/Device_id', require('./routes/api/Device_id'));
app.use('/api/diet/get_calorie', require('./routes/api/diet'));

//app.use('/picture/images', express.static(__dirname + '/imges'));
app.use('/api/Userlocation', require('./routes/api/Userlocation'));
app.use('/api/Pollution', require('./routes/api/Pollution'));
app.use('/api/Disease', require('./routes/api/Disease'));
app.use('/api/CurrentTrends', require('./routes/api/currenttrend'));
app.use('/api/charts', require('./routes/api/charts_ct'));

app.use('/api/User_emergency', require('./routes/api/User_emergency'));

app.use('/api/Emergencyno', require('./routes/api/Emergencyno'));
app.listen(1000, () => {
  console.log('Server started on port 1000');
});
