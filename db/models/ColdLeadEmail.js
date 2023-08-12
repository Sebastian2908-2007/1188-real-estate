import mongoose from "mongoose";
const {Schema,model} =mongoose;
import dayjs from "dayjs";

const coldLeadEmailSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
        get: timeStamp => dayjs(timeStamp).format('M/DD/YYYY')
    },
    suspectedEmail:{
        type: String,
        required: false,
        trim: true,
        unique: false,
        match: [/.+@.+\..+/, 'Must be an email address!']
    } 
});

const ColdLeadEmail = mongoose.models.ColdLeadEmail || model('ColdLeadEmail',coldLeadEmailSchema);

module.exports = ColdLeadEmail;