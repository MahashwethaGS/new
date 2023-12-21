const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('./connection/db')
const Credentials = require('./models/credentials');
const Details = require('./models/details');

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001


app.get(`/`, (req, res) => {
    console.log(`hittng '/'`);
    res.send(`'/'`)
})

app.post(`/credentials`, async (req, res) => {
    console.log(`hittng '/credentials'`);
    const data = req.body.payload;
    console.log('data');
    console.log(data);
    const newCredentials = await Credentials.create(data);
    res.send(`'/credentials'`)
})

app.post(`/details`, async (req, res) => {
    console.log(`hittng '/details'`);
    const data = req.body.payload;
    console.log('data');
    console.log(data);
    const newDetails = await Details.create(data);
    res.send(`'/details'`)
})

app.listen(PORT, () => {
    console.log(`Backend Express Running in ${PORT}`);
})
