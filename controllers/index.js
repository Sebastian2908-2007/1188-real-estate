const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const getImage = require('./get-image-route');
const adminRoutes = require('./admin-routes');

// consume and prefix admin-routes
router.use('/admin',adminRoutes);

//consume and prefix get-image-route
router.use('/images',getImage);

// consume and prefix api routes
router.use('/api',apiRoutes);

// consume home routes
router.use('/',homeRoutes);

// catch all route for routes that dont exist
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;