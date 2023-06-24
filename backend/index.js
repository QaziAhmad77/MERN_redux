const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = process.env.port || 4000;
const cors = require('cors');
app.use(cors());
dotenv.config();
app.use(express.json());
mongoose.set('strictQuery', true);

const router = require('./routes/index');

app.use('/api', router);

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log('Database connected successfully');
  })
  .catch(function (err) {
    console.log(err);
    console.log('There is some issue while connecting database');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use((req, res) => {
  return res.status(404).send('Rout Not Found');
});
