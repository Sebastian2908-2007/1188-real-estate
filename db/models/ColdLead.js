import mongoose from "mongoose";
const {Schema, model} = mongoose;

const coldLeadSchema = new Schema({
    emailAddresses:[{
        type: Schema.Types.ObjectId,
       ref: 'ColdLeadEmail',
       unique: false
    }],
    phone:[{
        type: Schema.Types.ObjectId,
        ref:'ColdLeadPhone'
    }],
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