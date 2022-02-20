const router = require('express').Router();
const {Review,User} = require('../../models');
const authorize_user = require('../../utils/autorize-user');

router.get('/',(req,res) => {
    Review.findAll({
        include: {
            model: User,
            attributes: {exclude: ['password']}
        }
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status;this.use(500).json(err);
    });
});

// get review by the id
router.get('/:id',(req,res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: {exclude: ['password']}
        }
    })
    .then(dbReviewData => {
        if(!dbReviewData) {
            res.status(404).json({message: 'no review found with that id!'});
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a review
router.post('/',authorize_user,(req,res) => {
  Review.create({
      review_text: req.body.review_text,
      user_id: req.body.user_id
  })
  .then(dbReviewData => {
      if(!dbReviewData) {
          res.status(500).json({message: 'please fill add review text'});
          return;
      }
      res.json(dbReviewData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// update a review
router.put('/:id',authorize_user,(req,res) => {
    Review.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewData => {
        if(!dbReviewData[0]) {
            res.status(404).jsonp({message: 'sorry no review found with thst id'});
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a review
router.delete('/:id',authorize_user,(req,res) => {
    Review.destroy({
        where: {
            id: req.params.id 
        }
    })
    .then(dbReviewData => {
        if(!dbReviewData) {
            res.status(404).json({message: 'no review found with that id!'});
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;