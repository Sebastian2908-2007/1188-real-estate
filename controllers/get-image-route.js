const router = require('express').Router();
const {getS3Video} = require('../utils/s3');

// this route will serve images from s3 using the getS3Video function being imported from ../utils/s3
router.get('/:key', (req,res) => {
  const key = req.params.key
  //console.log(key);
  const readStream = getS3Video(key);

  readStream.pipe(res);
});


module.exports = router;