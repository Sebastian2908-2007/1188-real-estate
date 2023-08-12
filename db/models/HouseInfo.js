import mongoose from "mongoose";
const {Schema, model} = mongoose;

const houseInfoSchema = new Schema({
    garageType:{
        type: String,
        required: false,
        trim: true 
    },
    atticType:{
        type: String,
        required: false,
        trim: true,
    },
    occupiedStatus:{
        type: String,
        required: false,
        trim: true 
    },
    basementType:{
        type: String,
        required: false,
        trim: true
    },
    lengthOwned:{
        type: String,
        required: false,
        trim: true
    },
    listedStatus:{
        type: String,
        required: false,
        trim: true
    },
    propertyCondition:{
        type: String,
        required: false,
        trim: true
    },
    repairs:{
        type: String,
        required: false,
        trim: true
    },
    walkThroughVideo:{
        type: String,
        required: false,
        trim: true
    },

});

const HouseInfo = mongoose.models.HouseInfo || model('HouseInfo', houseInfoSchema);

module.exports = HouseInfo;