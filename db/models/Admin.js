import mongoose from 'mongoose';
const {Schema, model} = mongoose;
//const superAdminPass = process.env.SUPERADMINPASSWORD;
const adminSchema = new Schema({
    firstName:{
        type: String,
        trim: true,
        required: true,
    },
    lastName:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must be an email address!']
    },
    role:{
        type: String,
        trim: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
        match: [/^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,'password must contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character and have a length of at least of 8']
    }
});



const Admin = mongoose.models.Admin || model('Admim', adminSchema);

module.exports = Admin;