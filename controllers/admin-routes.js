const router = require('express').Router();
const {Lead,Review,Post,User} = require('../models');
require('dotenv').config();
const authorize = require('../utils/autorize-user');
// this route renders the admin dashboard with lead,review and post data
router.get('/dashboard',authorize,(req,res) => {
    let adminData = [];
    Lead.findAll({})
    .then(dbLeadData => {
        const leads = dbLeadData.map(lead => lead.get({plain: true}));
       adminData.push(leads)
    }).then(() => {
        Review.findAll({
            include:{
                model: User,
                attributes:['username','state']
            }
        }).then(dbReviewData => {
            const reviews = dbReviewData.map(review => review.get({plain: true}));
            adminData.push(reviews);
        })
        .then(() => {
            Post.findAll({
                include: { 
                model: User,
                attributes:['username','state'] 
                }
            })
            .then(dbPostData => {
                const posts = dbPostData.map(post => post.get({plain: true}));
                adminData.push(posts);
                
                const leads = adminData[0];
                
                const reviews = adminData[1];
                
                const posts2 = adminData[2];
                
                res.render('admin-dashboard',{leads,reviews,posts2,loggedIn: req.session.loggedIn})
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
   
});




// this is the edit lead page route
router.get('/edit/lead/:id',authorize,(req,res) => {
    Lead.findOne({
        where: {
            id: req.params.id 
        }
    })
    .then(dbLeadData => {
        const lead = dbLeadData.get({plain: true});
        res.render('edit-lead',{lead,loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
  
});

// this is the edit review page route
router.get('/edit/review/:id',authorize,(req,res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes:['username','state']
        }
    })
    .then(dbReviewData => {
        const review = dbReviewData.get({plain: true})
        res.render('edit-review',{review, loggedIn: req.session.loggedIn});
    })
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

// this is the edit post page route
router.get('/edit/post/:id',authorize,(req,res) => {
    Post.findOne({
        where: {
            id: req.params.id 
        }, 
        include: {
            model: User,
            attributes: ['username','state']
        }
    })
    .then(dbPostData => {
        const post = dbPostData.get({plain: true});
        res.render('edit-post',{post, loggedIn: req.session.loggedIn})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this will render admin logout page
router.get('/login',(req,res) => {
    res.render('admin-login');
});

// this will render single users page where users can be edited by the admin
router.get('/users',(req,res) => {
    User.findAll({})
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({plain: true}));
        res.render('admin-users',{users, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
  
});


module.exports = router;