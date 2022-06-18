const express = require('express');
const restaurantsRouter = require('./restaurants')

const router = express.Router();
router.use('/api/v1/restaurants', restaurantsRouter);

module.exports = router;