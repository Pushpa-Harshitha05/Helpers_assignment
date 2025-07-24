const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const cors = require('cors');
const mongoose = require('mongoose');
const addListingsRouter = require('./routes/add_listings');
const displayHelpers = require('./routes/display_helpers');

app.use(cors());
app.use(express.json());

app.use('/',addListingsRouter);
app.use('/display',displayHelpers);

async function connectDB() {
    mongoose.connect("mongodb://localhost:27017/helpers")
}

connectDB().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Failed to connect to MongoDB", err);
});

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(port);
