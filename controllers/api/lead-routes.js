const router = require('express').Router();
const {Lead} = require('../../models');
// import multer for uploading file through a form
const multer = require('multer');
// configure multer instance to put files in a directory called lead-uploads
var video_upload = multer({dest: 'lead-uploads/'});
// import function that uploads to the s3 bucket
const {s3Upload} = require('../../utils/s3');

// get all leads
router.get('/',(req,res) => {
    Lead.findAll()
    .then(dbLeadData => res.json(dbLeadData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get lead by id
router.get('/:id',(req,res) => {
    Lead.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbLeadData => {
        if(!dbLeadData) {
            res.status(404).json({message: 'no lead with that id!'});
            return;
        }
        res.json(dbLeadData);
    })
    .catch(err => {
      console.log(err),
      res.status(500).json(err);
    });
});

// this route will post a lead to the db and a video to amazon s3
router.post('/',video_upload.single('walk-through-video'),async (req,res) => {
    const video_file = req.file;
    console.log(video_file);
    // use s3 function to upload file to s3
    const walk_through_video = await s3Upload(video_file);
    console.log(walk_through_video.Key);
    
    Lead.create({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       address: req.body.address,
       walk_through_video: walk_through_video.Key
    }).then(dbLeadData => {
        if(!dbLeadData) {
            res.status(500).json({message: 'incorrect data'});
            return;
        } 
        console.log(dbLeadData);
        console.log(dbLeadData.walk_through_video); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a lead
router.put('/:id',(req,res) => {
    Lead.update(req.body, {
        where: {
            id: req.params.id
        }
     })
    .then(dbLeadData => {
        if(!dbLeadData[0]) {
            res.status(404).json({message: 'no lead found with that id'});
            return;
        }
        res.json(dbLeadData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a lead
router.delete('/:id',(req,res) => {
    Lead.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbLeadData => {
        if(!dbLeadData) {
            res.status(404).json({message: 'no lead found with that id!!!'});
            return;
        }
        res.json(dbLeadData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;