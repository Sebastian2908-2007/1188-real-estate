import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const situationSchema = new Schema({
    sellFastStatus:{
        type: String,
        required: false,
        trim: true,
    },
    openToPayments:{
        type: String,
        required: false,
        trim: true,
    },
    sellerGoal:{
        type: String,
        required: false,
        trim: true,
    },
    bestCallTime:{
        type: String,
        required: false,
        trim: true,
    }
});

const Situation =  mongoose.models.Situation || model('Situation', situationSchema);

module.exports = Situation;