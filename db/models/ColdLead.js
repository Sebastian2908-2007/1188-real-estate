import mongoose from "mongoose";
const {Schema, model} = mongoose;

const coldLeadSchema = new Schema({
    email:[{
        type: String,
        required: false,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must be an email address!']
    }],
    phone:{
        type: String,
        required: false,
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

const ColdLead = mongoose.models.ColdLead || model('ColdLead',coldLeadSchema);

module.exports = ColdLead;