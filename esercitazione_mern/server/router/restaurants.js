const express = require('express');
const restaurantController = require('../controllers/restaurants')
const reviewController = require('../controllers/reviews')

const restaurantsRouter = express.Router();

restaurantsRouter.get('/', restaurantController.getRestaurants);
restaurantsRouter.route('/review')
    .post(reviewController.addReview)
restaurantsRouter.get('/:id', restaurantController.getRestaurantById);

module.exports = restaurantsRouter;