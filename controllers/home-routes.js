const router = require('express').Router();
const {Post,User} = require('../models');

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

module.exports = router;