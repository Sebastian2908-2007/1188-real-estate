const router = require('express').Router();
const {Lead} = require('../../models');
// import multer for uploading file through a form
const multer = require('multer');
// configure multer instance to put files in a directory called lead-uploads
var video_upload = multer({dest: 'lead-uploads/'});
// import function that uploads to the s3 bucket
const {s3Upload} = require('../../utils/s3');

router.post('/',video_upload.single('walk-through-video'),async (req,res) => {
    console.log(req.file);
    //const result = await s3Upload(req.file);
    //console.log(result);
    /*Lead.create({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       address: req.body.address,
       walk_through_video: req.file.Key
    }).then(dbLeadData => {
        if(!dbLeadData) {
            res.status(500).json({message: 'incorrect data'});
            return;
        } 
        console.log(dbLeadData.walk_through_video); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });*/
});

module.exports = router;