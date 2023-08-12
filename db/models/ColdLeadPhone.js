import mongoose from "mongoose";
const {Schema,model} = mongoose;
import dayjs from "dayjs";

const coldLeadPhoneSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
        get: timeStamp => dayjs(timeStamp).format('M/DD/YYYY')
    },
    phone:{
        type:String,
        required: true,
        trim: true,
    }
});

const ColdLeadPhone = mongoose.models.ColdLeadPhone || model('ColdLeadPhone',coldLeadPhoneSchema);

module.exports = ColdLeadPhone;