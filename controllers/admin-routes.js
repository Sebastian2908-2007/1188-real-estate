const router = require('express').Router();
const {Lead,Review,Post,User} = require('../models');
require('dotenv').config();
// this route renders the admin dashboard with lead,review and post data
router.get('/dashboard',(req,res) => {
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
router.get('/edit/lead/:id',(req,res) => {
    res.render('edit-lead');
});

// this is the edit review page route
router.get('/edit/review/:id',(req,res) => {
    res.render('edit-review');
});

// this is the edit post page route
router.get('/edit/post/:id',(req,res) => {
    res.render('edit-post');
});

// this is thhe route for logging in the administrator
router.post('/login',(req,res) => {
    const admin = process.env.ADMIN;
    const password = process.env.ADMIN_PASSWORD;
    const sId = '88811';
    
    if(admin != req.body.admin || password != req.body.password) {
        res.status(500).json({message: 'wrong user name or password'});
        return;
    }
    req.session.save(() => {
        req.session.user_id = sId;
        req.session.username = admin;
        req.session.loggedIn = true;

        res.json({user: admin,message:'you are now logged in!'})
    });
    console.log(req.session.user_id);
   
});

// logout admin
router.post('/logout',(req,res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        })
    }else{
        res.status(404).end();
    }
});


module.exports = router;