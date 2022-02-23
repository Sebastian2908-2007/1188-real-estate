const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const reviewRoutes = require('./review-routes');
const leadRoutes = require('./lead-routes');

// consume lead routes
router.use('/leads', leadRoutes);

// consume review routes
router.use('/reviews', reviewRoutes);

// consume my postRoutes
router.use('/posts', postRoutes);

// consume my user routes
router.use('/users', userRoutes);

module.exports = router;