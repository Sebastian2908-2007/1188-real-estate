const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// consume my postRoutes
router.use('/posts', postRoutes);

// consume my user routes
router.use('/users', userRoutes);

module.exports = router;