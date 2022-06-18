const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant')
const Review = require('../models/review')

module.exports = {
    addReview: (req, res) => {
        try {
            let restaurant;
            Restaurant.findById(req.body.restaurantId)
                .then(rest => restaurant = rest)
                .then(() => {
                    return Review.create({
                        user: mongoose.Types.ObjectId(req.body.userId),
                        restaurantId: mongoose.Types.ObjectId(req.body.restaurantId),
                        text: req.body.reviewText,
                        date: new Date()
                    })
                })
                .then(rev => {
                    restaurant.reviews.push(rev);
                    restaurant.save();
                })
                .then(() => res.json({message: 'Inserimento effettuato'}));
        } catch(e) {
            res.status(500).json({error: e});
        }
    }
}