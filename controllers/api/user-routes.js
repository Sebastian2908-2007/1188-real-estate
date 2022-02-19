const router = require('express').Router();
const {User, Review, Post} = require('../../models');

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
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;