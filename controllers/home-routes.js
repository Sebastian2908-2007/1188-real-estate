const router = require('express').Router();
const {Post,User, Review} = require('../models');
const authorize_user = require('../utils/autorize-user');

// this will render the homepage
router.get('/',(req,res) => {
   res.render('homepage',{loggedIn: req.session.loggedIn});
});

// this will render the create new user account page
router.get('/create-user-account',(req,res) => {
   res.render('create-user-account');
});

// this will render the lead form page
router.get('/get-cash-offer',(req,res) => {
   res.render('lead-page',{loggedIn: req.session.loggedIn});
});

// this renders the user-login page
router.get('/login',(req,res) => {
   res.render('user-login');
});


// this will render the user-blog page it will include a call to database to retrieve post info
router.get('/user-blog',(req,res) => {
    Post.findAll({
       order:[['created_at', 'DESC']],
       include: {
          model: User,
          attributes:['username','state']
       }
    })
    .then(dbPostData => {
       const posts = dbPostData.map(post => post.get({plain: true}));
       res.render('user-blog',{posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
       console.log(err);
       res.status(500).json(err);
    });
});

// this renders the user-review page and will include call to retrieve review data
router.get('/user-reviews',(req,res) => {
   Review.findAll({
      order:[['created_at', 'DESC']],
      include: {
         model: User,
         attributes:['username','state']
      }
   })
   .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({plain: true}));
      res.render('user-review',{reviews, loggedIn: req.session.loggedIn});
   })
   .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

module.exports = router;