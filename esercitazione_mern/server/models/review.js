const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: Date,
    text: String,
    restaurantId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("Review", reviewSchema);