const router = require('express').Router();
const {Lead} = require('../../models');
// import multer for uploading file through a form
const multer = require('multer');
// configure multer instance to put files in a directory called lead-uploads
var video_upload = multer({dest: 'lead-uploads/'});
// import function that uploads to the s3 bucket
const {s3Upload} = require('../../utils/s3');

router.post('/',video_upload.single('walk-through-video'),async (req,res) => {
    const video_file = req.file;
    console.log(video_file);
    // use s3 function to upload file to s3
    const walk_through_video = await s3Upload(video_file);
    console.log(walk_through_video.key);
    
    /*const body = req.body
    console.log(body.first_name);
  
    console.log(body.last_name);
  
    console.log(body.email);
  
    console.log(body.address);*/
  

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