// import just s3 from aws-sdk
const S3 = require('aws-sdk/clients/s3');
// require dotenv for the info in .env file
require('dotenv').config();
// require native node fs
const fs = require('fs');

// create variables from .env s3 information
const bucketName = process.env.AWS_BUCKET_NAME;
// the bottom three are used in the s3 instance
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


// my s3 instance
const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey

})

// this will upload a file to my S3 bucket
function s3Upload(file) {
    const fileStream = fs.createReadStream(file,path);

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParams).promise();
};

// this will download a file from S3 bucket



module.exports = {s3Upload};