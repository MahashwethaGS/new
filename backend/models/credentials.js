// models/credentialsModel.js
const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    email: String,
    pass: String,
    // Other fields
});

const Credentials = mongoose.model('Credentials', credentialsSchema);

module.exports = Credentials;
