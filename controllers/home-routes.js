const router = require('express').Router();

router.get('/get-cash-offer',(req,res) => {
   res.render('lead-page');
});

module.exports = router;