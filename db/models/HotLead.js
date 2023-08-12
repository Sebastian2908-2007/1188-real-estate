import mongoose from "mongoose";
const {Schema, model} = mongoose;

const hotLeadSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must be an email address!']
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    houseInfo:{
        type: Schema.Types.ObjectId,
        ref: 'HouseInfo'
    },
    situation:{
        type: Schema.Types.ObjectId,
        ref:'Situation'
    },
    firstName:{
        type: String,
        required: false,
        trim: true 
    },
    lastName:{
      type: String,
      required: false,
      trim: true 
    },
    notes:[{
        type: Schema.Types.ObjectId,
        ref: 'Note',
        required:false
    }],
    status:{
        type: String,
        required: false,
        trim: true,
    }
});

const HotLead = mongoose.models.HotLead || model('HotLead',hotLeadSchema);

module.exports = HotLead;