const router = require('express').Router();
const {User,Post} = require('../../models');
const authorize_user = require('../../utils/autorize-user');

// get all posts
router.get('/',(req,res) => {
    Post.findAll({
        include: {
            model: User,
            attributes: {exclude: ['password']}
        }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(404).json(err);
    });
});

// get post by id
router.get('/:id',(req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: {exclude: ['password']}
        }
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message:'no post found with that id!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a post
router.post('/',authorize_user,(req,res) => {
    Post.create({
        post_text: req.body.post_text,
        user_id: req.body.user_id
    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(500).json({mesage:'please fill out all field properly'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
