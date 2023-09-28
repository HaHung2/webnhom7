const mongoose = require('mongoose')
require('dotenv').config()
const {MONGO_URL} = process.env
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected!'));

module.exports = mongoose