const Restaurant = require('../models/restaurant');

module.exports = {
    getRestaurants: (req, res) => {
        const restaurantsPerPage = 9;
        const query = {};

        if (req.query.name) query.$text = {$search: req.query.name};
        if (req.query.cuisine) query.cuisine = req.query.cuisine;
        if (req.query.zipcode) query.address.zipcode = req.query.zipcode;

        if (req.query.next) query._id = {$lt: req.query.next};

        Restaurant.find(query).sort({_id: -1}).limit(restaurantsPerPage)
            .then(data => res.json([data, data[data.length -1]._id]))
            .catch(e => res.status(500).json({error: e}));
    },

    getRestaurantById: (req, res) => {
        Restaurant.findById(req.params.id)
            .then(rest => rest.populate("reviews"))
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    }
}