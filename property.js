const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    image: String
});

module.exports = mongoose.model('Property', PropertySchema);
