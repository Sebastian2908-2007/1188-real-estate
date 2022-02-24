const router = require('express').Router();
const {Lead} = require('../../models');
// import multer for uploading file through a form
const multer = require('multer');
// configure multer instance to put files in a directory called lead-uploads
var video_upload = multer({dest: 'lead-uploads/'});
// import function that uploads to the s3 bucket
const {s3Upload} = require('../../utils/s3');

router.post('/',video_upload.single('walk-through-video'),async (req,res) => {
    await s3Upload(req.file);
});

module.exports = router;