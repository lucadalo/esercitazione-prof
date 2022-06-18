const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    address: {
        building: String,
        coord: [Number],
        street: String,
        zipcode: String
    },
    borough: String,
    cuisine: String,
    grades: [{
        date: Date,
        grade: String,
        score: Number
    }],
    name: {
        type: String,
        text: true
    },
    restaurant_id: {
        type: String,
        unique: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);