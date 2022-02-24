const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// consume api routes
router.use('/api',apiRoutes);

// consume home routes
router.use('/',homeRoutes);

// catch all route for routes that dont exist
router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;