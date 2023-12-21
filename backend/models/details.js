// models/details.js
const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    gender: String,
    age: Number,
    dob: String,
    mobile: Number,
  });

const Details = mongoose.model('Details', detailsSchema);

module.exports = Details;