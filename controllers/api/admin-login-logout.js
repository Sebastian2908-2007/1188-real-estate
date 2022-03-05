require('dotenv').config();
const router = require('express').Router();

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