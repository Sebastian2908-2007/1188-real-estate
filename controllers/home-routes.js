const router = require('express').Router();

// this will render the homepage
router.get('/',(req,res) => {
   res.render('homepage');
});

// this will render the create new user account page
router.get('/create-user-account',(req,res) => {
   res.render('create-user-account');
});


// this will render the lead form page
router.get('/get-cash-offer',(req,res) => {
   res.render('lead-page');
});

module.exports = router;