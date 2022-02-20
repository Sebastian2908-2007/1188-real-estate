const router = require('express').Router();
const {User, Review, Post} = require('../../models');
const bcrypt = require('bcrypt');
const authorize_user = require('../../utils/autorize-user');

// get all users
router.get('/', (req,res) => {
    User.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get user by id
router.get('/:id',( req,res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where:{
            id: req.params.id
        },
        include: [
            { 
          model: Review,
          atttributes:['id','review_text','created_at']
        },
        {
            model: Post,
            attributes: ['id','post_text','created_at']
        }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'no user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a user
router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        state: req.body.state,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
         // declare session variables
         req.session.user_id = dbUserData.id;
         req.session.username = dbUserData.username;
         req.session.loggedIn = true;
         res.json(dbUserData)
         console.log(req.session.username);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// login route
router.post('/login',(req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'no user found with this id'});
            return;
        }
       bcrypt.compare(req.body.password,dbUserData.password,function(err, result) {
           if(result === false) {
               res.status(400).json({message: 'incorrect password'});
               return;
           }
           req.session.save(() => {
               req.session.user_id = dbUserData.id;
               req.session.username = dbUserData.username;
               req.session.loggedIn = true;
               res.json({user: dbUserData, message: 'you are now logged in!'});
           });
       });
    })
});

// logout 
router.post('/logout', (req,res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else{
        res.status(404).end();
    }
});

// update user info added middleware funtion to make sure its a logged in user before updating any info
router.put('/:id',authorize_user,(req,res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
        console.log(dbUserData);
        console.log(dbUserData[0]);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete user added middleware funtion to make sure its a logged in user before deleting any info
router.delete('/:id',authorize_user,(req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;